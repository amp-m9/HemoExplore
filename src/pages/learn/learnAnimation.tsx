import * as THREE from "three";
import Stats from "stats-js";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
import { createNoise2D } from "simplex-noise";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

interface Cell {
    mesh: THREE.Mesh;
    group: THREE.Group;
    highlight: THREE.Mesh;
}
interface BloodCell extends Cell {
    haemoglobin: THREE.InstancedMesh;
}


let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let stats: Stats;

let innerWallRadius = 4.5;



let sevenTone: THREE.Texture;
let fiveTone: THREE.Texture;
let threeTone: THREE.Texture;
const redBloodCellURL = new URL("../../assets/models/redBloodCellPatched.glb", import.meta.url);
const threeToneURL = new URL("../../assets/gradientMaps/threeTone.jpg", import.meta.url);
const fiveToneURL = new URL("../../assets/gradientMaps/fiveTone.jpg", import.meta.url);
const sevenToneURL = new URL("../../assets/gradientMaps/sevenTone2.jpg", import.meta.url);

let orbitControls: OrbitControls;
const loopSettings = {
    progress: 0.00001,
    timePassed: 0,
    pauseAnimation: false,
    step: 0.0001,
    speed: 1,
};
let loaded = false;
let activeAnimation: () => any;



const altBgColor = new THREE.Color(0xffffff);

let textRenderer: CSS2DRenderer;
const haemoglobinCount = 60;


export function initialise3DCanvas() {
    setUpRenderer();
    if (!renderer) {
        return;
    }

    intialiseOrbitControls();
    initialiseCamera();
    loadGradientMaps();
    loadBloodCellModels();


    const loop = (time: number) => {
        stats.update();
        // let delta = time - loopSettings.timePassed;
        loopSettings.timePassed = time;
        renderer.render(scene, camera);
        // textRenderer.render(scene, camera);
        if (!loaded || loopSettings.pauseAnimation) return;

        orbitControls.update();
        loopSettings.progress += loopSettings.step * loopSettings.speed;
        loopSettings.progress %= 1;
    };

    renderer.setAnimationLoop(loop);
    renderer.setClearColor(0x000000, 0);
}

function initialiseCamera() {
    camera.position.set(1, 1, 0);
    camera.lookAt(0, 0, 0);
    camera.updateMatrix();
}

function loadBloodCellModels() {
    const redBloodCellMaterial = new THREE.MeshToonMaterial({
        color: 0xff0040,
        gradientMap: sevenTone,
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

                const redBloodCell = createBloodCell(redBloodCellMaterial, bloodCellGeometry, 1, 30);
                redBloodCell.cell.geometry.computeBoundingBox();
                const box = redBloodCell.cell.geometry.boundingBox;
                const center = new THREE.Vector3();
                box?.getCenter(center);
                scene.add(redBloodCell.group);


                const spotLight = new THREE.SpotLight(0xffffff, .8, 0);
                spotLight.position.set(3, .5, .5);
                spotLight.lookAt(redBloodCell.cell.position);
                redBloodCell.group.position.y -= (center.y / 2)
                scene.add(spotLight);


                setUpClickables();
                loaded = true;
                return;
            }
        });
    });
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
    sevenTone.minFilter = THREE.NearestFilter;
    sevenTone.magFilter = THREE.NearestFilter;
    sevenTone.name = "sevenTone";
}


function intialiseOrbitControls() {
    if (orbitControls) {
        orbitControls.domElement = renderer.domElement;
        orbitControls.object = camera;
    }
    else {
        orbitControls = new OrbitControls(camera, renderer.domElement);
    }
    orbitControls.enabled = true;
    orbitControls.maxDistance = 15;
    orbitControls.minDistance = 1;
    orbitControls.enablePan = false;
    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 4;
}


function createBloodCell(
    material: THREE.Material,
    geometry: THREE.BufferGeometry,
    scale: number,
    haemoglobinCount: number
) {
    const group = new THREE.Group();
    const mesh = new THREE.Mesh(geometry, material);
    const outline = new THREE.MeshBasicMaterial({ side: THREE.BackSide, color: 0xffffff });
    const outlineMesh = new THREE.Mesh(geometry, outline);
    const scale2 = 1.06
    outlineMesh.scale.set(scale2, scale2, scale2);
    mesh.scale.set(scale, scale, scale);
    const instancedHaemoglobin = (haemoglobinCount > 0) ? generateHeamoglobin(haemoglobinCount, scale) : null;

    group.add(mesh);
    group.add(outlineMesh);

    return { cell: mesh, haemoglobin: instancedHaemoglobin, group: group };
}


const heamoDummy = new THREE.Object3D();
function generateHeamoglobin(amount: number, rangeScale: number) {
    function rad(k: number, n: number, b: number) {
        if (k > n - b) return 1.0;
        return Math.sqrt(k - 0.5) / Math.sqrt(n - (b + 1) / 2);
    }

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

function setUpClickables() {

}
function setUpRenderer() {
    const canvas = document.getElementById("modelPane");
    if (canvas == null) {
        throw new Error("Yikes, where's the canvas?");
    }

    const rect = canvas.getBoundingClientRect();
    renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;

    stats = new Stats();


    scene = new THREE.Scene();

    const nearPane = 0.1;
    const farPane = 160;

    camera = new THREE.PerspectiveCamera(45, rect.width / rect.height, nearPane, farPane);
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

function onCanvasResize() {
    const canvasWrapper = (document.getElementById("canvasWrapper") as HTMLDivElement);
    renderer.setSize(canvasWrapper.clientWidth, canvasWrapper.clientHeight)
    camera.updateProjectionMatrix();
    return;
}


const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;


export function expandCanvasToWindow() {

    const canvas = renderer.domElement;
    const canvasWrapper = document.getElementById("canvasWrapper") as HTMLDivElement;
    if (canvasWrapper == null)
        throw new Error("Yikes, where's the wrapper?");
    const startingRect = canvasWrapper.getBoundingClientRect();

    canvasWrapper.remove();
    document.body.appendChild(canvasWrapper);
    canvasWrapper.style.position = 'absolute';
    canvasWrapper.style.zIndex = '100';

    canvasWrapper.style.top = '50%';
    canvasWrapper.style.left = '0';
    canvasWrapper.style.width = '50%';
    canvasWrapper.style.height = `70%`;
    canvas.style.borderRadius = '0';
    canvas.style.borderColor = '#260850'


    canvas.style.height = '100%';
    canvas.style.width = '100%';
    canvas.style.position = 'absolute';
    renderer.setSize(canvasWrapper.clientWidth, canvasWrapper.clientHeight);
    camera.position.copy(camera.localToWorld(new THREE.Vector3(0, +3, -3)))
}