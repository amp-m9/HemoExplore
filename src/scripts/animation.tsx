import * as THREE from "three";
import Stats from "stats-js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import { clamp } from "three/src/math/MathUtils";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { SIOController, SceneInteractiveObject } from "./SIOController";
import ambientAudioFile from "../assets/sound/zapsplat_nature_underwater_ambience_flowing_current_deep_002_30535.mp3"
import heartbeatAudioFile from "../assets/sound/zapsplat_human_heartbeat_single_26493.mp3";
import { generateVesselCurve, generateVesselCurveFromStartPoints } from "./noise";
import { MainCell, CellData, BloodVessel } from "./interfaces";

const innerWallRadius = 4.5;
const radialSegments = 17;
const outerWallRadius = innerWallRadius + 0.5;

const tubularSegments = 128;

const mainCellRotationAxis = new THREE.Vector3(1, 1, 0).normalize();
const redBloodCellURL = new URL("../assets/models/redBloodCellPatched.glb", import.meta.url);
const threeToneURL = new URL("../assets/gradientMaps/threeTone.jpg", import.meta.url);
const fiveToneURL = new URL("../assets/gradientMaps/fiveTone.jpg", import.meta.url);
const sevenToneURL = new URL("../assets/gradientMaps/sevenTone.jpg", import.meta.url);

const redBloodCellCount = 600;

const dummy = new THREE.Object3D();
const lightingDummy = new THREE.Object3D();

const pointLightDepth = 22;
const spotlightOffSet = new THREE.Vector3(10, -7, -100);
const directionalLightOffset = new THREE.Vector3(-10, -10, 0);

const curvePointCount = 300;
const loopSettings = { step: 0.0001, };
const defaultRotationOffset = 0.0998;
const fogColor = new THREE.Color(0xd24141);
const canvasPercentage = { x: 1, y: 1 };

export default class AnimationsController {
    private static instance: AnimationsController;

    private LoadPercent = 0;
    private Initialised: boolean = false;

    private NoiseStart = 1;
    private EntryOverlap: number = 0;
    private LastCurve: THREE.Vector3[];

    private Renderer: THREE.WebGLRenderer;
    private Scene: THREE.Scene;
    private Camera: THREE.PerspectiveCamera;
    private OrbitControls: OrbitControls;
    private CameraSettings = {
        sleep: false,
        currentOffset: new THREE.Vector3(0, 0, -5),
        targetOffSet: new THREE.Vector3(0, 0, -5),
    }

    private Textures = { gradientMaps: {} };
    private Geometries = { redBloodCell: {}, innerVessel: {}, outerVessel: {} };
    private Materials = { redBloodCell: {}, highlight: {}, innerVessel: {}, outerVessel: {} }
    private Sounds = { whoosh: {}, ambient: {}, beat: {} }

    private MainCell: MainCell;
    private RedBloodCellData: Array<CellData>;
    private RedBloodCellInstances: THREE.InstancedMesh;
    private SecondBloodVessel: BloodVessel = {};
    private FirstBloodVessel: BloodVessel = {};
    private VesselArray = [this.FirstBloodVessel, this.SecondBloodVessel]
    private VesselIndex = 0;

    private PointLight: THREE.PointLight;
    private SpotLight: THREE.SpotLight;
    private DirectionalLight: THREE.DirectionalLight;
    BloodCellRotation: number = 0;
    RelativeVelocity: number = 1;


    public static getInstance(): AnimationsController {
        if (!AnimationsController.instance) {
            AnimationsController.instance = new AnimationsController();
        }

        return AnimationsController.instance;
    }

    private constructor() {
    }

    public async Initialise() {
        if (this.Initialised)
            return;

        this.SetUpRenderer();
        this.GenerateCellData();
        await this.LoadAssets();
        await this.LoadSounds();
        this.GenerateCurveData();

        this.CreateMeshes();
        this.ConstructScene();
        this.AddLightingToScene();
        this.AttatchCamera();
        this.updateCells();
        this.UpdateLighting();
        this.Renderer.render(this.Scene, this.Camera)
        this.Initialised = true;
    }

    public AnimateIdle() {
        this.Renderer.setAnimationLoop(
            () => {
                this.UpdateLighting();
                this.updateCells();
                this.UpdateMainCell();
                this.UpdateCameraOffset();
                this.Renderer.render(this.Scene, this.Camera);
            }
        )
    }

    public ShutDown() {
        this.Renderer.dispose();
    }

    private UpdateCameraOffset() {
        const { currentPath, progress } = this.getCurrentPath(this.MainCell.progress);
        const tangent = currentPath.getTangent(progress).normalize().multiplyScalar(4);
        const cameraPosition = this.MainCell.group.position.clone().sub(tangent);
        this.Camera.position.copy(this.MainCell.group.worldToLocal(cameraPosition))
        this.Camera.lookAt(this.MainCell.group.position);
        this.Camera.rotateY(Math.PI * defaultRotationOffset)

    }
    private AttatchCamera() {
        this.MainCell.group.add(this.Camera);
    }

    private CreateMeshes() {
        const { MainCell, Materials, Geometries, FirstBloodVessel } = this;
        const redBloodCellMaterial = Materials.redBloodCell as THREE.MeshToonMaterial;
        const redBloodCellGeometry = Geometries.redBloodCell as THREE.BufferGeometry<THREE.NormalBufferAttributes>;

        this.RedBloodCellInstances = CreateInstancedMeshFromGeometry(redBloodCellMaterial, redBloodCellGeometry, redBloodCellCount);

        MainCell.mesh = CreateMeshAndScale(redBloodCellMaterial, redBloodCellGeometry, 1.2);

        const innerVesselMaterial = Materials.innerVessel as THREE.MeshToonMaterial;
        const outerVesselMaterial = Materials.outerVessel as THREE.MeshToonMaterial;
        const { innerVesselMesh, outerVesselMesh } = GenerateBloodVessels(
            outerVesselMaterial,
            innerVesselMaterial,
            FirstBloodVessel.path,
        )

        FirstBloodVessel.innerVesselMesh = innerVesselMesh;
        FirstBloodVessel.outerVesselMesh = outerVesselMesh;

        this.GenerateNextBloodVessel(1);
    }

    private GenerateCellData() {
        console.log('starting GenerateCellData');

        this.RedBloodCellData = new Array<CellData>(redBloodCellCount);
        for (let i = 0; i < this.RedBloodCellData.length; i++) {
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
            this.RedBloodCellData[i] = cellData;
        }

        this.MainCell = {
            ...this.MainCell,
            offset: new THREE.Vector3(0, 0, 0),
            progress: 0.5,
            velocity: getRandom(0.000098, 0.0001) / 2,
        }
        console.log('finishing GenerateCellData');

    }

    private GenerateCurveData() {
        this.LastCurve = generateVesselCurve(0, 0, 0, curvePointCount);
        this.VesselArray[0].path = new THREE.CatmullRomCurve3(this.LastCurve);
    }

    private SetUpRenderer() {
        console.log('starting SetUpRenderer');
        const canvas = document.querySelector("canvas.webgl") as HTMLCanvasElement;
        this.Renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
        this.Renderer.shadowMap.enabled = true;
        this.Renderer.setSize(window.innerWidth, window.innerHeight);
        this.Renderer.setClearColor(0xd24141)
        this.Scene = new THREE.Scene();
        this.Scene.fog = new THREE.Fog(fogColor, 4.7, 170);

        const nearPane = 0.1;
        const farPane = 160;
        this.Camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, nearPane, farPane);

        window.addEventListener("resize", () => this.onWindowResize(this.Camera, this.Renderer), false);
        console.log('finishing SetUpRenderer');
    }

    private onWindowResize(Camera: THREE.PerspectiveCamera, Renderer: THREE.Renderer) {


        const aspectWidth = (window.innerWidth * canvasPercentage.x)
        const aspectHeight = (window.innerHeight * canvasPercentage.y);
        Camera.aspect = aspectWidth / aspectHeight;
        Camera.updateProjectionMatrix();

        const rendererWidth = window.innerWidth * canvasPercentage.x;
        const rendererHeight = window.innerHeight * canvasPercentage.y;

        Renderer.setSize(rendererWidth, rendererHeight);
        Renderer.setSize(rendererWidth, rendererHeight);
    }

    private tubeCount = () => this.VesselArray[1].path == undefined ? 1 : 2;

    /**
     * Loads materials, textures and geometries. No models are made at this point
     */
    private async LoadAssets() {
        console.log('starting LoadAssets');

        const [threeTone, fiveTone, sevenTone] = await Promise.all([
            LoadTexture(threeToneURL.href, 'threeTone'),
            LoadTexture(fiveToneURL.href, 'fiveTone'),
            LoadTexture(sevenToneURL.href, 'sevenTone'),
        ]);

        Object.assign(this.Textures.gradientMaps, { threeTone, fiveTone, sevenTone })

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

        const outerWalltoonOptions: THREE.MeshToonMaterialParameters = {
            color: "#9e0045",
            gradientMap: threeTone,
            side: THREE.BackSide,
            opacity: 1,
        };
        const outerVesselMaterial = new THREE.MeshToonMaterial(outerWalltoonOptions);

        const innerWalltoonOptions: THREE.MeshToonMaterialParameters = {
            color: "#f6046d",
            opacity: 0.4,
            gradientMap: fiveTone,
            transparent: true,
            side: THREE.DoubleSide,
        };
        const innerVesselMaterial = new THREE.MeshToonMaterial(innerWalltoonOptions);

        this.Materials = {
            redBloodCell: redBloodCellMaterial,
            highlight: clickableMaterial,
            innerVessel: innerVesselMaterial,
            outerVessel: outerVesselMaterial
        }

        const rbcGeometry = await LoadModelGeometry(redBloodCellURL.href);
        rbcGeometry.rotateX(Math.PI / 2);

        this.Geometries.redBloodCell = rbcGeometry;
        console.log('fininshing loadAssets');

    }

    private async LoadSounds() {
        const listener = new THREE.AudioListener();
        this.Sounds.ambient = new THREE.Audio(listener);
        this.Sounds.beat = new THREE.Audio(listener);

        await Promise.all([
            LoadAudioFile(ambientAudioFile, this.Sounds.ambient, { loop: true, volume: 0.7 }),
            LoadAudioFile(heartbeatAudioFile, this.Sounds.beat, { loop: false, volume: 0.7 }),
        ])

        this.Sounds.ambient.play();
    }

    private GenerateNextBloodVessel(index: number) {
        this.NoiseStart += (curvePointCount * 2) + 1;

        const { Materials, LastCurve, VesselArray } = this;
        const {
            innerVesselMesh,
            outerVesselMesh,
            path,
            pathPoints,
            entryOverlap } = GenerateNextVessel(
                LastCurve,
                VesselArray[(index + 1) % 2].path,
                Materials.innerVessel,
                Materials.outerVessel,
                this.NoiseStart
            );

        const oldPipe = VesselArray[index];
        this.Scene.remove(oldPipe.innerVesselMesh, oldPipe.outerVesselMesh);
        this.Scene.add(innerVesselMesh, outerVesselMesh);
        this.LastCurve = pathPoints;
        Object.assign(VesselArray[index], { innerVesselMesh, outerVesselMesh, path })
        this.EntryOverlap = entryOverlap;
    }

    private ConstructScene() {
        const {
            MainCell,
            RedBloodCellInstances,
            SecondBloodVessel,
            FirstBloodVessel,
            Scene,
        } = this;

        var errorLoading = false;
        [
            { MainRBC: MainCell.mesh },
            { RedBloodCellInstances },
            SecondBloodVessel,
            FirstBloodVessel,
        ].forEach(object => {
            Object.keys(object)
                .forEach(key => {
                    if (!object[`${key}`]) {
                        console.error(`Failed to load ${key}`)
                        errorLoading = true;
                    }
                });
        });

        if (errorLoading)
            throw new Error("Errors occured creating meshes. Aborting program.");

        MainCell.group = new THREE.Group();
        MainCell.group.add(MainCell.mesh);

        Scene.add(MainCell.group);
        Scene.add(SecondBloodVessel.innerVesselMesh, SecondBloodVessel.outerVesselMesh);
        Scene.add(FirstBloodVessel.innerVesselMesh, FirstBloodVessel.outerVesselMesh);
        Scene.add(RedBloodCellInstances);
    }

    private AddLightingToScene() {

        this.PointLight = new THREE.PointLight(0xffffff, 0.2, 250, 0.4);
        this.PointLight.castShadow = true;
        this.Scene.add(this.PointLight);

        this.SpotLight = new THREE.SpotLight("#ff0000", 0.7, 243, 0.7, 1, 2);
        this.SpotLight.visible = true;
        this.Scene.add(this.SpotLight);

        this.DirectionalLight = new THREE.DirectionalLight(0xffffff, 0.1);
        this.DirectionalLight.visible = true;
        this.Scene.add(this.DirectionalLight);

        const ambientLight = new THREE.AmbientLight("#282828", 0.8);
        this.Scene.add(ambientLight);
    }

    private updateCells() {
        this.BloodCellRotation += 0.0001;
        this.UpdateBackgroundCells();
    }

    private UpdateBackgroundCells() {
        let data: CellData;
        for (let i = 0; i < this.RedBloodCellData.length; i++) {
            data = this.RedBloodCellData[i];
            const lastProgStr = data.progress.toString();
            const lastProg = data.progress;
            data.progress += data.velocity * this.RelativeVelocity;

            if (lastProg < 1 && !(data.progress < 1))
                data.progress += this.EntryOverlap;

            data.progress %= this.tubeCount();

            const inSecondTube = data.progress > 1;
            this.RedBloodCellData[i] = data;
            const index = inSecondTube ? (this.VesselIndex + 1) % 2 : this.VesselIndex;
            const progress = inSecondTube ? (data.progress % 1) : data.progress

            const start = this.VesselArray[index].path.getPoint(progress);
            dummy.position.copy(start);
            dummy.lookAt(this.VesselArray[index].path.getPoint(progress + 0.00001));
            dummy.position.copy(dummy.localToWorld(data.offset.clone()));

            const sign = i % 2 == 0 ? -i : i;

            dummy.rotation.x += Math.PI / 200 + this.BloodCellRotation * sign;
            dummy.updateMatrix();

            this.RedBloodCellInstances.setMatrixAt(i, dummy.matrix.clone());
        }
    }


    private UpdateMainCell() {
        const lastProg = this.MainCell.progress;
        this.MainCell.progress += this.MainCell.velocity * this.RelativeVelocity;
        if (lastProg < 1 && !(this.MainCell.progress < 1))
            this.MainCell.progress += this.EntryOverlap;

        this.MainCell.progress %= this.tubeCount();

        var { currentPath, progress } = this.getCurrentPath(this.MainCell.progress);

        let point = currentPath.getPoint(progress);
        this.MainCell.group.position.set(point.x, point.y, point.z);

        if (this.MainCell.progress > 1.5) {
            this.GenerateNextBloodVessel(this.VesselIndex,);
            this.UpdateVesselIndexesAndCellProgress();
        }

        const rotation = (Math.PI / 200 + Math.PI * loopSettings.step);
        this.MainCell.mesh.rotateOnAxis(mainCellRotationAxis, rotation);

        this.RedBloodCellInstances.instanceMatrix.needsUpdate = true;
        this.RedBloodCellInstances.castShadow = true;

        this.BloodCellRotation += 0.0001;
        this.RelativeVelocity -= 0.02;
        if (this.RelativeVelocity < 1.009) {
            this.RelativeVelocity = 3.5;
            if (this.Sounds.beat.isPlaying)
                this.Sounds.beat.stop();
            this.Sounds.beat.play();
        }
    }

    private getCurrentPath(itemProgress: number) {
        const inSecondTube = itemProgress > 1;
        const index = inSecondTube ? (this.VesselIndex + 1) % 2 : this.VesselIndex;
        const progressAlongPath = inSecondTube ? (itemProgress % 1) : itemProgress;

        let currentPath = this.VesselArray[index].path;
        return { currentPath, progress: progressAlongPath };
    }

    private UpdateLighting() {
        this.AdjustDummyForTransform(lightingDummy);

        let prog = clamp(this.MainCell.progress - 0.007, 0, 1);
        const anchor = this.VesselArray[this.VesselIndex].path.getPoint(prog);

        const spotlightPosition = lightingDummy.localToWorld(
            spotlightOffSet.clone()
        );
        this.SpotLight.position.copy(spotlightPosition);
        this.SpotLight.lookAt(anchor);
        this.PointLight.position.copy(
            lightingDummy.localToWorld(new THREE.Vector3(0, 0, +pointLightDepth))
        );

        const directionallightPosition = this.Camera.localToWorld(
            directionalLightOffset.clone()
        );
        this.DirectionalLight.position.copy(directionallightPosition);
        this.DirectionalLight.lookAt(anchor);
    }

    private AdjustDummyForTransform(object: THREE.Object3D) {
        const cameraPos = this.Camera.position;
        object.position.copy(cameraPos);
        object.lookAt(...this.MainCell.group.position.clone().toArray());
        object.updateMatrix()
        object.updateMatrixWorld(true)
    }

    private UpdateVesselIndexesAndCellProgress() {
        this.VesselIndex = (this.VesselIndex + 1) % 2;
        this.MainCell.progress = clamp(this.MainCell.progress - 1, 0, 2)
        this.RedBloodCellData = this.RedBloodCellData.map(data => {
            data.progress = clamp(data.progress - 1, 0, 2)
            return data;
        })
    }
}

const textureLoader = new THREE.TextureLoader();
async function LoadTexture(url: string, name: string) {
    const texture = textureLoader.loadAsync(threeToneURL.href);

    const texture_1 = await texture;
    texture_1.minFilter = THREE.NearestFilter;
    texture_1.magFilter = THREE.NearestFilter;
    texture_1.name = name;
    return texture_1;
}


const gltfLoader = new GLTFLoader();
async function LoadModelGeometry(url: string) {
    var geometry: THREE.BufferGeometry;
    return gltfLoader.loadAsync(url).then((gltf) => {
        gltf.scene.traverse((o) => {
            if (o.isMesh) {
                geometry = o.geometry.clone() as THREE.BufferGeometry;
            }
        });
    }).then(() => geometry);
}

function CreateInstancedMeshFromGeometry(
    material: THREE.MeshToonMaterial,
    geometry: THREE.BufferGeometry,
    count: number,
) {
    const instances = new THREE.InstancedMesh(
        geometry,
        material,
        count
    );
    instances.frustumCulled = false;
    //@ts-ignore
    instances.material.needsUpdate = true;
    return instances;
}

function CreateMeshAndScale(
    material: THREE.MeshToonMaterial,
    geometry: THREE.BufferGeometry,
    scale: number
) {
    const mesh = new THREE.Mesh(
        geometry,
        material,
    );
    mesh.scale.set(scale, scale, scale);
    return mesh;
}

function GenerateBloodVessels(
    outerVesselMaterial: THREE.Material,
    innerVesselMaterial: THREE.Material,
    path: THREE.Curve<THREE.Vector3>,
) {
    const outerVesselGeometry = new THREE.TubeGeometry(
        path,
        tubularSegments,
        outerWallRadius,
        radialSegments
    );

    const outerVesselMesh = new THREE.Mesh(outerVesselGeometry, outerVesselMaterial);

    const innerVesselGeometry = new THREE.TubeGeometry(
        path,
        tubularSegments,
        innerWallRadius,
        radialSegments
    );

    const innerVesselMesh = new THREE.Mesh(innerVesselGeometry, innerVesselMaterial);
    innerVesselMesh.receiveShadow = true;

    return { innerVesselMesh, outerVesselMesh }
}

function GenerateNextVessel(
    lastVesselCurvePoints: THREE.Vector3[],
    lastPath: THREE.CatmullRomCurve3,
    innerVesselMaterial: THREE.Material,
    outerVesselMaterial: THREE.Material,
    noiseStart: number
) {
    const endOfCurrentVesselPoints = lastVesselCurvePoints.slice(-2).map(p => p.toArray());

    const pathPoints = generateVesselCurveFromStartPoints(endOfCurrentVesselPoints, curvePointCount, noiseStart);
    const path = new THREE.CatmullRomCurve3(pathPoints);

    const { innerVesselMesh, outerVesselMesh } = GenerateBloodVessels(outerVesselMaterial, innerVesselMaterial, path);

    const endOfLastVessel = lastPath.getPoint(1);
    const pathDiffLength = path.getPoint(0).sub(endOfLastVessel).length();
    const entryOverlap = pathDiffLength / path.getLength();

    return { innerVesselMesh, outerVesselMesh, path, pathPoints, entryOverlap }
}

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;
const randomOffSet = () => getRandom(-innerWallRadius, innerWallRadius);

const audioLoader = new THREE.AudioLoader();

async function LoadAudioFile(url: string, threeAudio: THREE.Audio, settings?: { loop: boolean, volume: number }) {
    return audioLoader.loadAsync(url).then((buffer) => {
        threeAudio.setBuffer(buffer)
        if (settings) {
            threeAudio.setLoop(settings.loop)
            threeAudio.setVolume(settings.volume)
        }
    })
}