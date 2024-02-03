import * as THREE from "three";
import { tubeGenReceiveMessage, tubeGenSendMessage } from "./tubeBuilder";
import Stats from "stats-js";
import {
    CSS2DObject,
    CSS2DRenderer,
} from "three/examples/jsm/renderers/CSS2DRenderer";
import { createNoise2D } from "simplex-noise";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import styles from "../App.module.css";
import gsap from "gsap";
import { clamp, randFloat, randInt } from "three/src/math/MathUtils";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { SIOController, SceneInteractiveObject } from "./SIOController";
import { exitQuiz, initQuiz, showQuestion } from "./quizQuestions";
import { journey } from "./journeyAnimation";
import ambientAudioFile from "../assets/sound/zapsplat_nature_underwater_ambience_flowing_current_deep_002_30535.mp3"
import heartbeatAudioFile from "../assets/sound/zapsplat_human_heartbeat_single_26493.mp3";
import { generateVesselCurve, generateVesselCurveFromStartPoints } from "./noise";

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

interface MainCell extends CellData, Cell { }


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
    // sickleCell: BloodCell;
}
interface BloodVessel {
    innerVesselMesh: THREE.Mesh,
    outerVesselMesh: THREE.Mesh,
    path: THREE.CatmullRomCurve3,
}
let lastVesselCurvePoints: THREE.Vector3[];
let stats: Stats;

let spotLight: THREE.SpotLight;
let pointLight: THREE.PointLight;
let directionalLight: THREE.DirectionalLight;
let ambientLight: THREE.AmbientLight;

let innerWallRadius = 4.5;
const radialSegments = 17;
const outerWallRadius = innerWallRadius + 0.5;
let mainCell: MainCell;
let redBloodCellData: Array<CellData>;
let bloodCellInstances: THREE.InstancedMesh;
let inspectorActiveMainCell: BloodCell;

let firstBloodVessel: BloodVessel = { innerVesselMesh: undefined, outerVesselMesh: undefined, path: undefined } as unknown as BloodVessel;
let secondBloodVessel: BloodVessel = { innerVesselMesh: undefined, outerVesselMesh: undefined, path: undefined } as unknown as BloodVessel;
let vesselIndex = 0;
let entryOverlap = 0;
let vesselArray = [firstBloodVessel, secondBloodVessel];
let outerVesselMaterial: THREE.MeshToonMaterial;
let innerVesselMaterial: THREE.MeshToonMaterial;
let cloneVesselMaterial: THREE.MeshToonMaterial;
const tubularSegments = 128;

let genNext = true;
let otherCells: OtherCells;
let bloodCellRotation = 0;
const mainCellRotationAxis = new THREE.Vector3(1, 1, 0).normalize();
let ambientSound: THREE.Audio;
let heartbeatSound: THREE.Audio
let noiseStart = 0;
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

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;
const randomOffSet = () => getRandom(-innerWallRadius, innerWallRadius);

class AnimationsController {
    private static instance: AnimationsController;
    private renderer: THREE.WebGLRenderer;
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private mainCell: MainCell = {};

    private constructor() {
        this.setUpRenderer();
        Promise.all([
            this.LoadAssets(),
            this.generateCellData(),
        ])
    }
    private async generateCellData() {
        return new Promise<Number>((resolve) => {
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

            this.mainCell = {
                ...this.mainCell,
                group: new THREE.Group(),
                offset: new THREE.Vector3(0, 0, 0),
                progress: 0.000,
                velocity: getRandom(0.000098, 0.0001) / 2,
            }
            resolve(1)
        })
    }

    public static getInstance(): AnimationsController {
        if (!AnimationsController.instance) {
            AnimationsController.instance = new AnimationsController();
        }

        return AnimationsController.instance;
    }

    private setUpRenderer() {
        var { renderer, scene, camera } = this;
        const { onWindowResize } = this;
        const canvas = document.querySelector("canvas.webgl") as HTMLCanvasElement;
        renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
        renderer.shadowMap.enabled = true;
        renderer.setSize(window.innerWidth, window.innerHeight);

        scene = new THREE.Scene();
        scene.fog = new THREE.Fog(fogColor, 4.7, 170);

        const nearPane = 0.1;
        const farPane = 160;
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, nearPane, farPane);

        window.addEventListener("resize", onWindowResize, false);

    }

    private onWindowResize() {
        var { renderer, camera } = this;

        const aspectWidth = (window.innerWidth * canvasPercentage.x)
        const aspectHeight = (window.innerHeight * canvasPercentage.y);
        camera.aspect = aspectWidth / aspectHeight;
        camera.updateProjectionMatrix();

        const rendererWidth = window.innerWidth * canvasPercentage.x;
        const rendererHeight = window.innerHeight * canvasPercentage.y;

        renderer.setSize(rendererWidth, rendererHeight);
        textRenderer.setSize(rendererWidth, rendererHeight);
    }
}
