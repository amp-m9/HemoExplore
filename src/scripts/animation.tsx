import * as THREE from "three";
import Stats from "stats-js";
import {
    CSS2DObject,
    CSS2DRenderer,
} from "three/examples/jsm/renderers/CSS2DRenderer";
import { createNoise2D } from "simplex-noise";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import styles from "../App.module.css";
import gsap from "gsap";
import { clamp } from "three/src/math/MathUtils";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { SIOController, SceneInteractiveObject } from "./SIOController";
import { exitQuiz, initQuiz, showQuestion } from "./quizQuestions";

interface CellData {
    offset: THREE.Vector3;
    progress: number;
    velocity: number;
}
interface Cell {
    mesh: THREE.Mesh;
    group: THREE.Group;
    highlight: THREE.Mesh;
}
interface BloodCell extends Cell {
    haemoglobin: THREE.InstancedMesh;
}

interface MainCell extends CellData, BloodCell { }

interface OtherCells {
    cellTooBig: BloodCell;
    // sickleCell: BloodCell;
}

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let stats: Stats;

let spotLight: THREE.SpotLight;
let pointLight: THREE.PointLight;
let directionalLight: THREE.DirectionalLight;
let ambientLight: THREE.AmbientLight;

let innerWallRadius = 4.5;
let currentCurve: THREE.CatmullRomCurve3;
let mainCell: MainCell;
let redBloodCellData: Array<CellData>;
let bloodCellInstances: THREE.InstancedMesh;
let inspectorActiveMainCell: BloodCell;
let otherCells: OtherCells;
let outerVesselMesh: THREE.Mesh;
let innerVesselMesh: THREE.Mesh;
let bloodCellRotation = 0;
const mainCellRotationAxis = new THREE.Vector3(1, 1, 0).normalize();

let sevenTone: THREE.Texture;
let fiveTone: THREE.Texture;
let threeTone: THREE.Texture;
const redBloodCellURL = new URL("../assets/models/redBloodCellPatched.glb", import.meta.url);
const threeToneURL = new URL("../assets/gradientMaps/threeTone.jpg", import.meta.url);
const fiveToneURL = new URL("../assets/gradientMaps/fiveTone.jpg", import.meta.url);
const sevenToneURL = new URL("../assets/gradientMaps/sevenTone.jpg", import.meta.url);

const redBloodCellCount = 600;

const dummy = new THREE.Object3D();
const lightingDummy = new THREE.Object3D();
const inspectorDummy = dummy.clone();

const pointLightDepth = 22;
const spotlightOffSet = new THREE.Vector3(10, -7, -100);
const directionalLightOffset = new THREE.Vector3(-10, -10, 0);

const upAxis = new THREE.Vector3(0, 1, 0);
const defaultEase = { ease: "expo.inOut" };

const curvePointCount = 300;
let curveMesh: THREE.Line;
let orbitControls: OrbitControls;
let orbitalControlsRelativePosition = new THREE.Vector3();
const loopSettings = {
    progress: 0.00001,
    timePassed: 0,
    pauseAnimation: false,
    step: 0.0001,
    speed: 1,
};
let relativeVelocity = 1;
let loaded = false;
let activeAnimation: () => any;
const defaultRotationOffset = 0.0906351097205758;

const camSettings = {
    camRotationY: defaultRotationOffset,
    camTranslateZ: 0,
    camTranslateY: 1,
};

let sioController: SIOController;
const fogColor = new THREE.Color(0xd24141);
const altBgColor = new THREE.Color(0x140030);
const paneBgColor = new THREE.Color(0x2b1944);

let textRenderer: CSS2DRenderer;
let inspectLabel: CSS2DObject;
const canvasPercentage = { x: 1, y: 1 };
const haemoglobinCount = 60;
const heamoDummy = new THREE.Object3D();


export function initBloodCellAnimation() {
    setUpRenderer();
    if (!renderer) {
        return;
    }

    generateCellData();
    intialiseOrbitControls();
    setUpTextElements();
    sioController = new SIOController(camera, renderer.domElement, false);

    createAndAddMainCurveToScene();

    initialiseCamera();

    loadGradientMaps();
    loadBloodCellModels();
    setUpLighting();

    activeAnimation = () => idleAnimation();

    const loop = (time: number) => {
        stats.update();
        let delta = time - loopSettings.timePassed;
        loopSettings.timePassed = time;
        renderer.render(scene, camera);
        textRenderer.render(scene, camera);
        if (!loaded || loopSettings.pauseAnimation) return;

        activeAnimation();

        loopSettings.progress += loopSettings.step * loopSettings.speed;
        loopSettings.progress %= 1;
    };

    renderer.setAnimationLoop(loop);
    renderer.setClearColor(0xd24141);
}
export function pause() {
    loopSettings.pauseAnimation = true;
}
const idleAnimation = () => {
    updateLighting();
    updateBloodCells();
    updateCamera();
};
const activeStreamAnimation = () => {
    updateLighting();
    updateBloodCells();
    keepOrbitControlsFixed();
};
function initialiseCamera() {
    const camStart = currentCurve.getPoint(0);
    camera.position.set(0, 0, -4);
    camera.lookAt(0, 0, 0);
    camStart.z += 0.01;
    camera.updateMatrix();
}

function loadBloodCellModels() {
    const redBloodCellMaterial = new THREE.MeshToonMaterial({
        color: 0xff0040,
        gradientMap: threeTone,
        emissive: 0x330010,
    });
    const clickableMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.BackSide,
        transparent: true,
        opacity: 0.1,
    });

    const gltfLoader = new GLTFLoader();
    gltfLoader.load(redBloodCellURL.href, function (gltf) {
        gltf.scene.traverse((o) => {
            // @ts-ignore
            if (o.isMesh) {
                // @ts-ignore
                const bloodCellGeometry = o.geometry.clone() as THREE.BufferGeometry;
                bloodCellGeometry.rotateX(Math.PI / 2);
                createAndAddInstancedBloodCells(redBloodCellMaterial, bloodCellGeometry);
                createAndAddMainBloodCell(redBloodCellMaterial, clickableMaterial, bloodCellGeometry);

                const cellLessHaemo = createCellWithLessHaemoglobin(redBloodCellMaterial, bloodCellGeometry, clickableMaterial);

                updateBloodCells();

                otherCells = {
                    cellTooBig: {
                        mesh: cellLessHaemo.mesh,
                        group: cellLessHaemo.group,
                        haemoglobin: cellLessHaemo.haemoglobin,
                        highlight: cellLessHaemo.highlight,
                    },
                };

                setUpClickables();
                setUpBloodVessels(fiveTone, threeTone);

                loaded = true;
                return;
            }
        });
    });
}

function createCellWithLessHaemoglobin(redBloodCellMaterial: THREE.MeshToonMaterial, bloodCellGeometry: THREE.BufferGeometry<THREE.NormalBufferAttributes>, clickableMaterial: THREE.MeshBasicMaterial)
    : BloodCell {
    const cellLessHaemo = createBloodCell(redBloodCellMaterial, bloodCellGeometry, 1, (haemoglobinCount / 4));
    cellLessHaemo.cell.material.side = THREE.DoubleSide;
    cellLessHaemo.cell.material.needsUpdate = true;

    const cellLessHaemoHighlight = cellLessHaemo.cell.clone();
    cellLessHaemoHighlight.scale.set(.99, .99, .99);
    cellLessHaemoHighlight.material = clickableMaterial.clone();
    cellLessHaemoHighlight.material.side = THREE.DoubleSide;
    cellLessHaemoHighlight.material.needsUpdate = true;
    cellLessHaemo.group.add(cellLessHaemoHighlight);
    return {
        mesh: cellLessHaemo.cell,
        group: cellLessHaemo.group,
        highlight: cellLessHaemoHighlight,
        haemoglobin: cellLessHaemo.haemoglobin
    };
}

function loadGradientMaps() {
    const textureLoader = new THREE.TextureLoader();

    threeTone = textureLoader.load(threeToneURL.href);
    threeTone.minFilter = THREE.NearestFilter;
    threeTone.magFilter = THREE.NearestFilter;

    fiveTone = textureLoader.load(fiveToneURL.href);
    fiveTone.minFilter = THREE.NearestFilter;
    fiveTone.magFilter = THREE.NearestFilter;
    fiveTone.name = "fiveTone";

    sevenTone = textureLoader.load(sevenToneURL.href);
    fiveTone.minFilter = THREE.NearestFilter;
    fiveTone.magFilter = THREE.NearestFilter;
    fiveTone.name = "sevenTone";
}

function createAndAddMainCurveToScene() {
    const noise = createNoise2D();
    let curvePoints = new Array<THREE.Vector3>(2 * curvePointCount + 1);

    for (let i = 0; i < 2 * curvePointCount + 1; i++) {
        const point = new THREE.Vector3(
            noise(i * 0.001, (i / 13) * 0.1) * 150, // x
            noise(i * 0.001, 0.1), // y
            i * 5 // z
        );

        curvePoints[i] = point;
    }

    currentCurve = new THREE.CatmullRomCurve3(curvePoints);
    const material = new THREE.LineDashedMaterial({
        color: 0xff88ff,
        transparent: true,
        opacity: 0,
        linewidth: 4,
        gapSize: 0.5,
        dashSize: 4,
    });

    const geometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
    curveMesh = new THREE.Line(geometry, material);
    curveMesh.computeLineDistances();

    scene.add(curveMesh);
}

function intialiseOrbitControls() {
    orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enabled = false;
    orbitControls.maxDistance = 15;
    orbitControls.minDistance = 1;
    orbitControls.maxPolarAngle = Math.PI * 1.8;
    orbitControls.minPolarAngle = Math.PI * 0.2;
    orbitControls.addEventListener("change", () => {
        orbitalControlsRelativePosition = mainCell.group.worldToLocal(
            camera.position.clone()
        );
    });
}

function createAndAddMainBloodCell(
    cellMaterial: THREE.MeshToonMaterial,
    clickableMaterial: THREE.MeshBasicMaterial,
    geometry: THREE.BufferGeometry
) {
    const generatedCell = createBloodCell(cellMaterial, geometry, 1, haemoglobinCount);
    mainCell.mesh = generatedCell.cell;
    mainCell.highlight = createBloodCell(clickableMaterial, geometry, 1.2, 0).cell;
    mainCell.group = generatedCell.group.remove(generatedCell.haemoglobin).add(mainCell.highlight);
    mainCell.haemoglobin = generatedCell.haemoglobin;
    scene.add(mainCell.group);
}

function createBloodCell(
    material: THREE.Material,
    geometry: THREE.BufferGeometry,
    scale: number,
    haemoglobinCount: number
) {
    const group = new THREE.Group();
    const mesh = new THREE.Mesh(geometry, material.clone());
    mesh.scale.set(scale, scale, scale);
    const instancedHaemoglobin = (haemoglobinCount > 0) ? generateHeamoglobin(haemoglobinCount, scale) : null;

    group.add(mesh);
    if (instancedHaemoglobin != null) group.add(instancedHaemoglobin);

    return { cell: mesh, haemoglobin: instancedHaemoglobin, group: group };
}

function createAndAddInstancedBloodCells(
    redBloodCellMaterial: THREE.MeshToonMaterial,
    bloodCellGeometry: THREE.BufferGeometry
) {
    bloodCellInstances = new THREE.InstancedMesh(
        bloodCellGeometry,
        redBloodCellMaterial,
        redBloodCellCount
    );
    bloodCellInstances.frustumCulled = false;
    //@ts-ignore
    bloodCellInstances.material.needsUpdate = true;

    scene.add(bloodCellInstances);
}

function keepOrbitControlsFixed() {
    orbitControls.target = mainCell.group.position;
    camera.position.copy(mainCell.group.localToWorld(orbitalControlsRelativePosition));
    orbitControls.update();
}

function generateCellData() {
    redBloodCellData = new Array<CellData>(redBloodCellCount);
    for (let i = 0; i < redBloodCellData.length; i++) {
        const cellData: CellData = {
            offset: new THREE.Vector3(randomOffSet(), randomOffSet()),
            progress: getRandom(0, 1),
            velocity: getRandom(0.00009, 0.0001) / 2,
        };
        if (cellData.offset.length() > innerWallRadius - 0.4) {
            cellData.offset
                .normalize()
                .multiplyScalar(getRandom(2, innerWallRadius - 0.4));
        }
        redBloodCellData[i] = cellData;
    }

    mainCell = {
        group: new THREE.Group(),
        offset: new THREE.Vector3(0, 0, 0),
        progress: 0.001,
        velocity: getRandom(0.000098, 0.0001) / 2,
    };
}

function setUpBloodVessels(fiveTone: THREE.Texture, threeTone: THREE.Texture) {
    const innerWalltoonOptions: THREE.MeshToonMaterialParameters = {
        color: "#f6046d",
        opacity: 0.4,
        gradientMap: fiveTone,
        transparent: true,
        side: THREE.DoubleSide,
    };

    const outerWalltoonOptions: THREE.MeshToonMaterialParameters = {
        color: "#9e0045",
        gradientMap: threeTone,
        side: THREE.BackSide,
        opacity: 1,
    };

    const vesselOuterGeometry = new THREE.TubeGeometry(
        currentCurve,
        128,
        innerWallRadius + 0.5,
        17
    );
    const vesselOuterMaterial = new THREE.MeshToonMaterial(
        outerWalltoonOptions
    );

    outerVesselMesh = new THREE.Mesh(vesselOuterGeometry, vesselOuterMaterial);
    scene.add(outerVesselMesh);

    const innerVesselGeometry = new THREE.TubeGeometry(
        currentCurve,
        128,
        innerWallRadius,
        17
    );
    const innerVesselMaterial = new THREE.MeshToonMaterial(
        innerWalltoonOptions
    );
    innerVesselMesh = new THREE.Mesh(innerVesselGeometry, innerVesselMaterial);
    innerVesselMesh.receiveShadow = true;
    scene.add(innerVesselMesh);
}

function setUpLighting() {
    pointLight = new THREE.PointLight(0xffffff, 0.2, 250, 0.4);
    pointLight.castShadow = true;
    scene.add(pointLight);

    spotLight = new THREE.SpotLight("#ff0000", 0.7, 243, 0.7, 1, 2);
    spotLight.visible = true;
    scene.add(spotLight);

    directionalLight = new THREE.DirectionalLight(0xffffff, 0.1);
    directionalLight.visible = true;
    scene.add(directionalLight);

    ambientLight = new THREE.AmbientLight("#282828", 0.8);
    scene.add(ambientLight);
}
function setUpClickables() {
    const mainCellClickable: SceneInteractiveObject = {
        object: mainCell.group,
        highlighted: false,
        highlightFunction() {
            // @ts-ignore
            mainCell.highlight.material.opacity = 0.5;
            let textPos = camera.worldToLocal(mainCell.mesh.position.clone());
            textPos.add(new THREE.Vector3(0.8, 0.8, 0));
            textPos = camera.localToWorld(textPos);
            inspectLabel.position.copy(textPos);
            mainCell.group.add(inspectLabel);
            this.highlighted = true;
        },
        unHighlightFunction() {
            this.highlighted = false; // @ts-ignore ↓
            mainCell.highlight.material.opacity = 0.1;
            mainCell.group.remove(inspectLabel);
        },
        callbackFunction: () => {
            inspectRedBloodCell();
            sioController.disableObject(mainCell.group);
        },
    };
    sioController.addInteractiveObject(mainCellClickable);
}
function setUpRenderer() {
    const canvas = document.querySelector("canvas.webgl");
    if (canvas == null) {
        throw new Error("Yikes, where's the canvas?");
    }

    renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);

    stats = new Stats();
    stats.dom.style.position = "absolute";
    stats.dom.style.right = "0";
    stats.dom.style.top = "0";

    initialiseTextRenderer();

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(fogColor, 5, 170);

    const nearPane = 0.1;
    const farPane = 160;
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, nearPane, farPane);

    window.addEventListener("resize", onWindowResize, false);
}

function initialiseTextRenderer() {
    textRenderer = new CSS2DRenderer();
    textRenderer.setSize(window.innerWidth, window.innerHeight);
    textRenderer.domElement.style.position = "absolute";
    textRenderer.domElement.style.top = "0px";
    textRenderer.domElement.style.right = "0px";
    textRenderer.domElement.style.pointerEvents = "none";
    document.body.appendChild(textRenderer.domElement);
}

function onWindowResize() {
    const aspectWidth = (window.innerWidth * canvasPercentage.x)
    const aspectHeight = (window.innerHeight * canvasPercentage.y);
    camera.aspect = aspectWidth / aspectHeight;
    camera.updateProjectionMatrix();

    const rendererWidth = window.innerWidth * canvasPercentage.x;
    const rendererHeight = window.innerHeight * canvasPercentage.y;

    renderer.setSize(rendererWidth, rendererHeight);
    textRenderer.setSize(rendererWidth, rendererHeight);

    const inspectorUIDiv = document.getElementById('inspectorUIDiv') as HTMLDivElement;
    inspectorUIDiv.style.width = `${rendererWidth}px`;
    inspectorUIDiv.style.height = `${rendererHeight}px`;
}

function updateBloodCells() {
    let data: CellData;
    for (let i = 0; i < redBloodCellCount; i++) {
        data = redBloodCellData[i];

        const start = currentCurve.getPoint(data.progress);

        data.progress += data.velocity * relativeVelocity * loopSettings.speed;
        data.progress %= 1;

        redBloodCellData[i] = data;

        dummy.position.copy(start);
        dummy.lookAt(currentCurve.getPoint(data.progress + 0.00001));
        dummy.position.copy(dummy.localToWorld(data.offset.clone()));

        const sign = i % 2 == 0 ? -i : i;

        dummy.rotation.x += Math.PI / 200 + bloodCellRotation * sign;
        dummy.updateMatrix();

        bloodCellInstances.setMatrixAt(i, dummy.matrix.clone());
    }
    let point = currentCurve.getPoint(mainCell.progress);

    mainCell.progress += mainCell.velocity * relativeVelocity * loopSettings.speed;
    mainCell.progress %= 1;
    mainCell.group.position.set(point.x, point.y, point.z);

    const rotation = (Math.PI / 200 + Math.PI * loopSettings.step) * loopSettings.speed;
    mainCell.mesh.rotateOnAxis(mainCellRotationAxis, rotation);
    mainCell.highlight.rotateOnAxis(mainCellRotationAxis, rotation);

    bloodCellInstances.instanceMatrix.needsUpdate = true;
    bloodCellInstances.castShadow = true;

    bloodCellRotation += 0.0001 * loopSettings.speed;
    relativeVelocity -= 0.04 * loopSettings.speed;
    if (relativeVelocity < 1.009) relativeVelocity = 3.5;
}

export const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;
const randomOffSet = () => getRandom(-innerWallRadius, innerWallRadius);

function updateCamera() {
    adjustCameraForTransforms();
    camera.position.copy(
        camera.localToWorld(new THREE.Vector3(0, camSettings.camTranslateY, 0))
    );
    camera.lookAt(mainCell.group.position);
    camera.rotateY(Math.PI * camSettings.camRotationY);
    camera.lookAt(camera.localToWorld(new THREE.Vector3(0, 0, -10))); // or else ray caster is broken
}

function adjustCameraForTransforms() {
    let prog = clamp(mainCell.progress - 0.007, 0, 1);
    const cameraPos = currentCurve.getPoint(prog);
    camera.position.copy(cameraPos);
    const cameraLookAt = mainCell.group.position.clone();
    camera.lookAt(...cameraLookAt.toArray());
}

function adjustDummyForLights() {
    let prog = clamp(mainCell.progress - 0.007, 0, 1);
    const position = currentCurve.getPoint(prog);
    lightingDummy.position.copy(position);
    const lookAt = currentCurve.getPoint(mainCell.progress);
    lightingDummy.lookAt(...lookAt.toArray());
    lightingDummy.updateMatrix();
    lightingDummy.updateMatrixWorld(true);
}

function updateLighting() {
    adjustDummyForLights();

    let prog = clamp(mainCell.progress - 0.007, 0, 1);
    const anchor = currentCurve.getPoint(prog);

    const spotlightPosition = lightingDummy.localToWorld(
        spotlightOffSet.clone()
    );
    spotLight.position.copy(spotlightPosition);
    spotLight.lookAt(anchor);

    pointLight.position.copy(
        lightingDummy.localToWorld(new THREE.Vector3(0, 0, +pointLightDepth))
    );

    const directionallightPosition = camera.localToWorld(
        directionalLightOffset.clone()
    );
    directionalLight.position.copy(directionallightPosition);
    directionalLight.lookAt(anchor);
}

export function startJourney() {
    const homeContainer = document.getElementById(
        "homeContainer"
    ) as HTMLDivElement;
    const backButton = document.querySelector(
        `button.${styles.backButton}`
    ) as HTMLButtonElement;

    const timeline = gsap.timeline();
    timeline.add("start", 0);

    timeline
        .to(
            camSettings,
            {
                camRotationY: 0,
                camTranslateZ: 0.003,
                camTranslateY: 0.9,
                delay: 0,
                duration: 2,
                ...defaultEase,
                onComplete: () => {
                    sioController.wake();
                    orbitalControlsRelativePosition =
                        mainCell.group.worldToLocal(camera.position.clone());
                    orbitControls.target = mainCell.group.position;
                    orbitControls.enabled = true;
                    // orbitControls.dampingFactor = 0.5;
                    orbitControls.update();
                    activeAnimation = activeStreamAnimation;
                },
            },
            "start"
        )

        .to(
            homeContainer,
            {
                delay: 0,
                opacity: 0,
                duration: 2,
                onUpdate: () => { },
                onComplete: () => {
                    homeContainer.style.display = "none";
                    backButton.style.display = "block";
                    backButton.onclick = function () {
                        backToIdle();
                    };
                },
            },
            "start"
        )

        .to(
            curveMesh.material,
            {
                opacity: 0.4,
                duration: 2,
                delay: 0,
                ...defaultEase,
            },
            "start"
        );

    timeline.play("start").then(() => {
        timeline.kill();
    });
    initQuiz();
    showQuestion(0);
}

export function backToIdle() {
    exitQuiz();
    const homeContainer = document.getElementById(
        "homeContainer"
    ) as HTMLDivElement;
    homeContainer.style.display = "flex";

    const backButton = document.querySelector(
        `button.${styles.backButton}`
    ) as HTMLButtonElement;
    backButton.style.display = "none";
    sioController.sleep();

    orbitControls.enabled = false;
    activeAnimation = () => { };

    const timeline = gsap.timeline();
    timeline
        .to(
            camSettings,
            {
                camRotationY: defaultRotationOffset,
                camTranslateZ: 0,
                camTranslateY: 1,
                duration: 1,
                delay: 0.001,
                ...defaultEase,
            },
            0
        )

        .to(
            homeContainer,
            {
                opacity: 1,
                duration: 1,
                delay: 0,
                onStart: () => {
                    homeContainer.style.display = "flex";
                    backButton.style.display = "none";
                },
            },
            0
        );

    let progress = 0;
    let complete = false;
    const tweenToIdle = (time: number, deltaTime: number, frame: number) => {
        if (complete) return;
        progress += deltaTime / 1000;
        progress = clamp(progress, 0, 1);

        const destination = currentCurve.getPoint(mainCell.progress - 0.007);
        const source = new THREE.Vector3();
        camera.getWorldPosition(source);
        const direction = destination.clone().sub(source);

        const length = direction.length();
        direction.normalize();

        const pointAccros = source.add(
            direction.multiplyScalar(length * progress)
        );

        camera.position.copy(pointAccros);
        // camera.lookAt(mainCell.group.position);
        camera.position.copy(
            camera.localToWorld(
                new THREE.Vector3(0, camSettings.camTranslateY * progress, 0)
            )
        );
        camera.lookAt(mainCell.group.position);
        camera.rotateY(Math.PI * camSettings.camRotationY);
        camera.lookAt(camera.localToWorld(new THREE.Vector3(0, 0, -10)));

        if (progress > 0.99) {
            gsap.ticker.remove(tweenToIdle);
            activeAnimation = idleAnimation;
        }
    };

    sioController.sleep();
    gsap.ticker.add(tweenToIdle);
    timeline.play().then(() => {
        activeAnimation = idleAnimation;
        loopSettings.speed = 1;
    });
}

function addIfNotInScene(object: THREE.Object3D) {
    if (scene.getObjectById(object.id)) return;
    scene.add(object);
}


function setUpTextElements() {
    const div = document.createElement("div");
    div.textContent = "Inspect";
    div.style.color = "white";
    inspectLabel = new CSS2DObject(div);
}
const activeObjectClippingPlane = new THREE.Plane(
    new THREE.Vector3(0, 0, 1),
    30
);
const mainObjectComparisonClippingPlane = activeObjectClippingPlane.clone();
mainObjectComparisonClippingPlane.normal.applyAxisAngle(upAxis, Math.PI);
mainObjectComparisonClippingPlane.constant = 0;

const comparedObjectComparisonClippingPlane = mainObjectComparisonClippingPlane.clone();
function inspectRedBloodCell(): any {
    // @ts-ignore
    mainCell.mesh.material.gradientMap = fiveTone;
    const backButton = document.querySelector(
        `button.${styles.backButton}`
    ) as HTMLButtonElement;

    // @ts-ignore
    bloodCellInstances.material.transparent = true;

    // @ts-ignore
    innerVesselMesh.material.opacity = 0.4;

    const timeline = gsap.timeline();
    timeline;
    const slowDownDuration = 2;
    const zoomOutDuration = 3;

    timeline.add("slowDown", 0);
    timeline.add("zoomOut", 1);
    timeline.add("expandSide", 4);

    timeline
        .to(loopSettings,
            {
                speed: 0.000001,
                duration: slowDownDuration,
                ...defaultEase,
            },
            "slowDown"
        )

        .to(mainCell.mesh.rotation,
            {
                x: 0,
                y: 0,
                z: 0,
                duration: zoomOutDuration,
                ...defaultEase,
            },
            "zoomOut"
        )

        .to(mainCell.highlight.rotation,
            {
                x: 0,
                y: 0,
                z: 0,
                ...defaultEase,
                duration: zoomOutDuration,
            },
            "zoomOut"
        )

        .to(mainCell.highlight.scale,
            {
                x: 0.999,
                y: 0.999,
                z: 0.999,
            },
            "zoomOut"
        )
        .to(mainCell.group.position,
            {
                x: 0,
                y: 0,
                z: 0,
                onUpdate: function () {
                    orbitControls.target = mainCell.group.position;
                    orbitControls.update();
                    const progress = (timeline.time() - 1) / zoomOutDuration;
                    tweenFogAndCanvasColour(progress);
                    renderer.render(scene, camera);
                },
                ...defaultEase,
                duration: zoomOutDuration,
            },
            "zoomOut"
        )

        .to(bloodCellInstances.material,
            {
                opacity: 0,
                duration: zoomOutDuration / 2,
            },
            "zoomOut"
        )

        .to(outerVesselMesh.material,
            {
                opacity: 0,
                duration: zoomOutDuration / 2,
            },
            "zoomOut"
        )

        .to(innerVesselMesh.material,
            {
                opacity: 0,
                duration: zoomOutDuration / 2,
            },
            "zoomOut"
        )

        .to(curveMesh.material,
            {
                opacity: 0,
                duration: zoomOutDuration / 2,
            },
            "zoomOut"
        )
        .to(canvasPercentage,
            {
                x: 0.7,
                duration: 1,
                ...defaultEase,
                onUpdate: () => { onWindowResize(); renderer.render(scene, camera); },
                onComplete: () => setInspectorPaneWidth(),
            },
            "expandSide"
        )
        .to(orbitControls,
            {
                maxDistance: 1.9,
                duration: zoomOutDuration / 2,
                onUpdate: () => {
                    orbitControls.update();
                },
                onComplete: () => {
                    // @ts-ignore
                    mainCell.mesh.material.side = THREE.DoubleSide;
                    renderer.render(scene, camera);
                    activeObjectClippingPlane.normal.copy(getCameraVecToCell().normalize());
                    orbitControls.maxDistance = 1.9;
                    orbitControls.update();
                    mainObjectComparisonClippingPlane.normal.copy(getCameraVecToCell().normalize().clone().applyAxisAngle(upAxis, Math.PI / 2))
                    renderer.localClippingEnabled = true;
                    // @ts-ignore
                    mainCell.mesh.material.clippingPlanes = [activeObjectClippingPlane];
                    // @ts-ignore
                    mainCell.mesh.material.needsUpdate = true;

                    slowRevealCrossSection();
                    scene.remove(
                        bloodCellInstances,
                        innerVesselMesh,
                        outerVesselMesh,
                        curveMesh
                    );
                },
            },
            "zoomOut"
        );
    timeline.play().then(() => {
        backButton.onclick = function () {
            backToActiveStreamAnimation();
        };
    });
    return;
}


function tweenFogAndCanvasColour(p: number) {
    if (p > 1 || p < 0)
        return;
    const newFogColor = fogColor.clone().lerp(altBgColor, p);
    const newPageColor = fogColor.clone().lerp(paneBgColor, p);
    scene.fog = new THREE.Fog(newFogColor, 5, 30 + (1 - p) * 160);
    scene.background = newFogColor;
    document.body.style.background = "#" + newPageColor.getHexString();
}


function setInspectorPaneWidth() {
    const pane = document.querySelector(
        `div.${styles.inspectorPaneWrapper}`
    ) as HTMLDivElement;
    pane.style.width = "30vw";
    pane.style.display = "block";
    pane.style.opacity = "1";
}

function backToActiveStreamAnimation() {
    const timeline = gsap.timeline();
    const backButton = document.querySelector(
        `button.${styles.backButton}`
    ) as HTMLButtonElement;

    const removeClippingDuration = 1;
    const backToStreamDuration = 1;
    const speedUpDuration = 1;

    timeline.add("removeClipping", 0);
    timeline.add("backToStream", removeClippingDuration);
    timeline.add("speedUp", removeClippingDuration + backToStreamDuration);

    const mainCellRot = new THREE.Vector3(
        Math.PI * getRandom(0, 2),
        Math.PI * getRandom(0, 2),
        Math.PI * getRandom(0, 2)
    );
    const mainCellPos = currentCurve.getPoint(mainCell.progress);

    timeline
        .to(
            orbitControls,
            {
                maxDistance: innerWallRadius * 4,
                minDistance: innerWallRadius * 3,
                duration: backToStreamDuration,
                onUpdate: () => {
                    const p = timeline.progress();
                    orbitControls.update();
                    tweenFogAndCanvasColour(1 - p); // Setting fogColor as the background color also
                    onWindowResize();
                    renderer.render(scene, camera);
                },
                onComplete: () => {
                    sioController.enableObject(mainCell.group);
                },
                onStart: function () {
                    renderer.localClippingEnabled = false;
                    mainCell.group.remove(mainCell.haemoglobin);
                    // @ts-ignore
                    mainCell.mesh.material.side = THREE.FrontSide;
                    // @ts-ignore
                    mainCell.mesh.material.gradientMap = sevenTone;
                    scene.add(bloodCellInstances);
                    scene.add(innerVesselMesh);
                    scene.add(outerVesselMesh);
                    scene.add(curveMesh);
                },
            },
            "backToStream"
        )

        .to(
            mainCell.mesh.rotation,
            {
                x: mainCellRot.x,
                y: mainCellRot.y,
                z: mainCellRot.z,
                duration: backToStreamDuration,
                ...defaultEase,
            },
            "backToStream"
        )

        .to(
            mainCell.highlight.rotation,
            {
                x: mainCellRot.x,
                y: mainCellRot.y,
                z: mainCellRot.z,
                duration: backToStreamDuration,
                ...defaultEase,
            },
            "backToStream"
        )

        .to(
            loopSettings,
            {
                speed: 1,
                duration: backToStreamDuration,
                ...defaultEase,
                onComplete: function () {
                    activeAnimation = activeStreamAnimation;
                },
            },
            "backToStream"
        )

        .to(
            mainCell.group.position,
            {
                x: mainCellPos.x,
                y: mainCellPos.y,
                z: mainCellPos.z,
                onUpdate: function () {
                    orbitControls.target = mainCell.group.position;
                    orbitControls.update();
                },
                ...defaultEase,
                duration: backToStreamDuration,
            },
            "backToStream"
        )

        .to(
            bloodCellInstances.material,
            {
                opacity: 1,
                duration: backToStreamDuration / 4,
            },
            "backToStream"
        )

        .to(
            outerVesselMesh.material,
            {
                opacity: 1,
                duration: backToStreamDuration / 4,
                onComplete: function () {
                    outerVesselMesh.material.transparent = false;
                    bloodCellInstances.material.transparent = false;
                },
            },
            "backToStream"
        )

        .to(
            innerVesselMesh.material,
            {
                opacity: 0.4,
                duration: backToStreamDuration / 4,
            },
            "backToStream"
        )

        .to(
            curveMesh.material,
            {
                opacity: 1,
                duration: backToStreamDuration / 4,
            },
            "backToStream"
        );

    timeline.play().then(() => {
        backButton.onclick = function () {
            backToIdle();
        };
    });
}

function getCameraVecToCell(): THREE.Vector3 {
    inspectorDummy.position.copy(camera.position);
    inspectorDummy.rotateOnWorldAxis(upAxis, Math.PI / 2);

    return mainCell.group.position.clone().sub(inspectorDummy.position).setY(0);
}
function slowRevealCrossSection(): any {
    updateLighting();
    const timeline = gsap.timeline();
    activeAnimation = () => { }
    mainCell.group.add(mainCell.haemoglobin);

    timeline.to(
        activeObjectClippingPlane,
        {
            constant: 0,
            duration: 1.2,
            ease: "ease.inOut",
        },
        0
    );
    timeline.to(
        camera.position,
        {
            y: 1,
            onUpdate: () => {
                orbitControls.update();
            },
            duration: 1.2,
            ease: "ease.inOut",
        },
        0
    );
    // timeline.play().then(() => timeline.kill());
}

function generateHeamoglobin(amount: number, rangeScale: number) {
    const geo = new THREE.TorusKnotGeometry(1, 0.1);
    geo.scale(0.03, 0.03, 0.03);
    const radius = 0.46 * rangeScale;
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const heamoglobinInstances = new THREE.InstancedMesh(geo, mat, haemoglobinCount);
    heamoglobinInstances.position.set(0, 0, 0);
    const alpha = 0;
    const phi = (1 + Math.sqrt(5)) / 2;
    const b = Math.round(alpha * Math.sqrt(amount));
    for (let i = 0; i < amount; i++) {
        const r = rad(i, amount, b) * radius;
        const theta = (2 * Math.PI * i) / Math.pow(phi, 2);

        heamoDummy.position.set(r * Math.cos(theta), getRandom(-.1, .1), r * Math.sin(theta));

        heamoDummy.updateMatrix();
        heamoglobinInstances.setMatrixAt(i, heamoDummy.matrix.clone());
    }
    return heamoglobinInstances;
}

function rad(k, n, b) {
    if (k > n - b) return 1.0;
    return Math.sqrt(k - 0.5) / Math.sqrt(n - (b + 1) / 2);
}


export function inspectBigCell() {
    if (inspectorActiveMainCell.group.id == otherCells.cellTooBig.group.id) return;

    scene.remove(inspectorActiveMainCell.group);

    otherCells.cellTooBig.mesh.material.clippingPlanes = [
        activeObjectClippingPlane,
    ];
    otherCells.cellTooBig.group.position.set(0, 0, 0);
    inspectorActiveMainCell = otherCells.cellTooBig;

    const timeline = gsap.timeline();
    timeline.fromTo(
        activeObjectClippingPlane,
        {
            constant: 30,
        },
        {
            constant: 0,
            duration: 1.2,
            ease: "ease.inOut",
            onStart: () => {
                renderer.localClippingEnabled = true;
            },
        },
        0.25
    );

    timeline.play().then(() => timeline.kill());
    scene.add(otherCells.cellTooBig.group);

}
export function enableCompare() {
    mainCell.mesh.material.clippingPlanes = [mainObjectComparisonClippingPlane, activeObjectClippingPlane];
    mainCell.haemoglobin.material.clippingPlanes = [mainObjectComparisonClippingPlane];
    mainCell.highlight.material.clippingPlanes = [mainObjectComparisonClippingPlane];

    inspectorActiveMainCell.mesh.material.clippingPlanes = [comparedObjectComparisonClippingPlane, activeObjectClippingPlane];
    inspectorActiveMainCell.haemoglobin.material.clippingPlanes = [comparedObjectComparisonClippingPlane];
    inspectorActiveMainCell.highlight.material.clippingPlanes = [comparedObjectComparisonClippingPlane];

    // mainCell.mesh.material.clipIntersection = true;
    scene.add(mainCell.group);
}

