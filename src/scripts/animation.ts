import * as THREE from 'three';
import Stats from 'stats-js';
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';
import { CSG } from 'three-csg-ts';
import { createNoise2D } from 'simplex-noise';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import styles from '../App.module.css';
import gsap from 'gsap';
import { clamp } from 'three/src/math/MathUtils';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { SIOController, SceneInteractiveObject } from './threeGuiHandler';


interface CellData {
    offset:THREE.Vector3,
    progress: number,
    velocity: number
}

interface  MainCell extends CellData  {
    mesh: THREE.Mesh,
    highlight:THREE.Mesh,
    group:THREE.Group
}
let camera:THREE.PerspectiveCamera; 
let scene:THREE.Scene;
let renderer:THREE.WebGLRenderer;
let stats:Stats;
let innerWallRadius = 4.5;
let curve:THREE.CatmullRomCurve3;
let redBloodCellData:Array<CellData>;
let bloodCellGeometry:THREE.BufferGeometry;
let bloodCellInstances:THREE.InstancedMesh;
const redBloodCellURL = new URL('../assets/models/redBloodCellPatched.glb', import.meta.url);
const threeToneURL = new URL('../assets/gradientMaps/threeTone.jpg', import.meta.url);
const fiveToneURL = new URL('../assets/gradientMaps/fiveTone.jpg', import.meta.url);
const dummy = new THREE.Object3D();
const lightingDummy = new THREE.Object3D();

const redBloodCellCount = 600;
let mainCell:MainCell; 
let spotLight:THREE.SpotLight;
let pointLight:THREE.PointLight;
let directionalLight:THREE.DirectionalLight;
let ambientLight:THREE.AmbientLight;
const spotlightOffSet = new THREE.Vector3(10,-7,-100);
const depth = new THREE.Vector3(0,0,22);
const directionalLightOffset = new THREE.Vector3(-10,-10,0);
let curveMesh: THREE.Line;
let orbitControls:OrbitControls;
let orbitalControlsRelativePosition = new THREE.Vector3();
const loopSettings = {
    progress: 0.00001,
    timePassed: 0,
    pauseAnimation: false,
    step: 0.0001,
    speed: 1
}
let relVel = 1;
var loaded = false;
let activeAnimation : ()=>any;
const rotationOffsetRight= 0.0906351097205758;
const camOption = {
    camRotation: rotationOffsetRight,
    camTranslateZ: 0,
    camTranslateY: 1,
}
let sioController:SIOController; 

let textRenderer: CSS2DRenderer, bloodCellLabel:CSS2DObject;


export function initBloodCellAnimation() {
    setUpRenderer();
    sioController = new SIOController(camera, renderer.domElement, false)
    if (!renderer){
        return;
    }
    setUpTextElements();

    generateCellData();
    orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enabled = false;
    // orbitControls.maxDistance = innerWallRadius *.99;
    orbitControls.maxPolarAngle = (Math.PI*1.8);
    orbitControls.minPolarAngle = (Math.PI*.2);
    orbitControls.addEventListener('change', ()=>{
        orbitalControlsRelativePosition = mainCell.group.worldToLocal(camera.position.clone())
    })

    const noise = createNoise2D();

    // generate curve initial pointss;
    const curvePointCount = 300;
    let curvePoints = new Array<THREE.Vector3>(curvePointCount+1);
    for (let i = 0; i< curvePointCount+1; i++)
    {
        const point = new THREE.Vector3(
            noise(i * 0.001,(i/13)* 0.1) * 150,
            noise(i * 0.001,0.1) * -150,
            i*5
        ) 
        curvePoints[i] = point;
    }
    curve = new THREE.CatmullRomCurve3(curvePoints);
    const material = new THREE.LineDashedMaterial( { color: 0xff88ff, transparent:true, opacity:0, linewidth:4, gapSize:.5, dashSize:4} );
    const geometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
    curveMesh = new THREE.Line(geometry, material);
    curveMesh.computeLineDistances();
    scene.add(curveMesh);

    const camStart = curve.getPoint(0);
    camera.position.set(0,0,-4);
    camera.lookAt(0,0,0);
    camStart.z+= 0.01
    camera.updateMatrix();

    
    const gltfLoader = new GLTFLoader();
    const textureLoader = new THREE.TextureLoader();

    const threeTone = textureLoader.load( threeToneURL.href );
    threeTone.minFilter = THREE.NearestFilter;
    threeTone.magFilter = THREE.NearestFilter;

    const fiveTone = textureLoader.load( fiveToneURL.href );
    fiveTone.minFilter = THREE.NearestFilter;
    fiveTone.magFilter = THREE.NearestFilter;
    fiveTone.name = 'fiveTone'

    const redBloodCellMaterial = new THREE.MeshToonMaterial({color:0xff0040, gradientMap:threeTone, emissive:0x330010});
    const clickableMaterial = new THREE.MeshBasicMaterial({color:0xFFFFFF, side: THREE.BackSide, transparent: true, opacity:.2});
    gltfLoader.load(redBloodCellURL.href, function(gltf){
        gltf.scene.traverse((o)=>{
            if(o.isMesh){
                bloodCellGeometry = o.geometry.clone();
                console.log("BCG: ", bloodCellGeometry)
                bloodCellInstances = new THREE.InstancedMesh(bloodCellGeometry, redBloodCellMaterial, redBloodCellCount);
                bloodCellInstances.frustumCulled = false;
                scene.add(bloodCellInstances);
                
                mainCell.mesh = new THREE.Mesh(bloodCellGeometry, redBloodCellMaterial);
                mainCell.highlight = new THREE.Mesh(bloodCellGeometry.clone().scale(1.2, 1.2, 1.2), clickableMaterial);
                
                mainCell.group = new THREE.Group();
                mainCell.group.add(mainCell.highlight, mainCell.mesh);
                
                scene.add(mainCell.group)
                // scene.add(mainCell.highlight)
                
                updateBloodCells(0);
                bloodCellInstances.material.needsUpdate = true;
                setUpClickables();
                loaded = true;
                return;
            }
        })
    })
    
    setUpBloodVessels(fiveTone, threeTone);
    setUpLighting();
    scene.fog = new THREE.Fog( 0xd24141, 5, 170);

   
    activeAnimation = () => idleAnimation();
   
    const loop = (time:number) => {
        stats.update();
        let delta = time - loopSettings.timePassed;
        loopSettings.timePassed = time;
        renderer.render(scene, camera);
        textRenderer.render(scene, camera);
        if(!loaded || loopSettings.pauseAnimation)
            return;
        
        updateLighting();
        // updateBloodCells(loopSettings.progress, loopSettings.step * loopSettings.speed);
        updateBloodCells(loopSettings.progress);
            
        activeAnimation()
        
        loopSettings.progress+=(loopSettings.step * loopSettings.speed);
        loopSettings.progress%=1;
    }

    renderer.setAnimationLoop(loop);
    renderer.setClearColor(0xd24141);    
}
const idleAnimation = () =>{
    updateCamera();
}
const inspectCellAnimation = () => {
    orbitControls.target = mainCell.group.position;
    camera.position.copy(mainCell.group.localToWorld(orbitalControlsRelativePosition))
    orbitControls.update();
}
function generateCellData() {
    redBloodCellData = new Array<CellData>(redBloodCellCount);
    for (let i = 0; i < redBloodCellData.length; i++) {
        const cellData: CellData = {
            offset: new THREE.Vector3(randomOffSet(), randomOffSet()),
            progress: getRandomArbitrary(0, 1),
            velocity: getRandomArbitrary(0.000098, 0.0001)
            // velocity:0.0001
        };
        if (cellData.offset.length() > innerWallRadius - .5) {
            cellData.offset.normalize().multiplyScalar(getRandomArbitrary(2, innerWallRadius - .4));
        }
        redBloodCellData[i] = cellData;
    }
    const fake = new THREE.Mesh();

    mainCell = {
        group: new THREE.Group(),
        offset: new THREE.Vector3(0, 0, 0),
        progress: 0.001,
        velocity: getRandomArbitrary(0.000098, 0.0001),
        mesh: fake,
        highlight: fake
    };
}

function setUpBloodVessels(fiveTone: THREE.Texture, threeTone: THREE.Texture) {
    const innerWalltoonOptions: THREE.MeshToonMaterialParameters = {
        color: "#f6046d",
        opacity: 0.4,
        gradientMap: fiveTone,
        transparent: true,
        side: THREE.DoubleSide
    };
    const outerWalltoonOptions: THREE.MeshToonMaterialParameters = {
        color: "#9e0045",
        gradientMap: threeTone,
        side: THREE.BackSide
    };


    const vesselOuterGeometry = new THREE.TubeGeometry(curve, undefined, innerWallRadius + .5, 17);
    const vesselOuterMaterial = new THREE.MeshToonMaterial(outerWalltoonOptions);
    let outerVesselMesh = new THREE.Mesh(vesselOuterGeometry, vesselOuterMaterial);

    
    scene.add(outerVesselMesh);

    const innerVesselGeometry = new THREE.TubeGeometry(
        curve, undefined, innerWallRadius, 17);
    const innerVesselMaterial = new THREE.MeshToonMaterial(innerWalltoonOptions);
    const innerVesselMesh = new THREE.Mesh(innerVesselGeometry, innerVesselMaterial);
    innerVesselMesh.receiveShadow = true;
    scene.add(innerVesselMesh);
}

function setUpLighting() {
    pointLight = new THREE.PointLight("#0xffffff", 0.2, 250, 0.4);
    pointLight.castShadow = true;
    scene.add(pointLight);
    console.log(pointLight.color.getHexString());

    spotLight = new THREE.SpotLight("#ff0000", .7, 243, .7, 1, 2);
    spotLight.visible = true;
    scene.add(spotLight);

    directionalLight = new THREE.DirectionalLight(0xffffff, .1);
    directionalLight.visible = true;
    scene.add(directionalLight);

    ambientLight = new THREE.AmbientLight("#282828", 0.8);
    scene.add(ambientLight);
}
function setUpClickables(){
    const mainCellClickable:SceneInteractiveObject = {
        object:mainCell.group,
        highlighted:false,
        highlightFunction(){
            //@ts-ignore
            mainCell.highlight.material.opacity = 0.5;
            let textPos = camera.worldToLocal(mainCell.mesh.position.clone());
            textPos.add(new THREE.Vector3(.8,.8,0));
            textPos = camera.localToWorld(textPos)
            bloodCellLabel.position.copy(textPos)
            mainCell.group.add(bloodCellLabel)
            this.highlighted = true;
        },
        unHighlightFunction() {
            this.highlighted = false; //@ts-ignore ↓
            mainCell.highlight.material.opacity = 0.1;
            mainCell.group.remove(bloodCellLabel);
        },
        callbackFunction: ()=>inspectRedBloodCell(),
    }
    sioController.addInteractiveObject(mainCellClickable);
}
function setUpRenderer() {
    const canvas = document.querySelector('canvas.webgl')
    if (canvas == null) {
      throw (new Error("Yikes, where's the canvas?"));
    }

    renderer = new THREE.WebGLRenderer({antialias:true, canvas:canvas });
    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);

    stats = new Stats();
    document.body.appendChild(stats.dom)

    textRenderer = new CSS2DRenderer(); 
    textRenderer.setSize(window.innerWidth, window.innerHeight)
    textRenderer.domElement.style.position = 'absolute';
    textRenderer.domElement.style.top = '0px';
    textRenderer.domElement.style.left = '0px';
    textRenderer.domElement.style.pointerEvents = 'none';
    document.body.appendChild(textRenderer.domElement);


    scene = new THREE.Scene();

    const nearPane = 0.1;
    const farPane = 160;
    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        nearPane,
        farPane
    );
    
    window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    textRenderer.setSize( window.innerWidth, window.innerHeight );
}

let rotator = 0;
function updateBloodCells(){
    let data:CellData;
    for(let i = 0; i<redBloodCellCount; i++){
        data = redBloodCellData[i];
        
        const start = curve.getPoint(data.progress);
        
        // data.progress+= data.velocity * relVel * loopSettings.speed;
        data.progress+= data.velocity * relVel * loopSettings.speed;
        data.progress%=1;
        
        redBloodCellData[i]=data;
        
        dummy.position.copy(start);
        dummy.lookAt(curve.getPoint(data.progress+0.00001));
        dummy.position.copy(dummy.localToWorld(data.offset.clone()));
        
        const sign = i%2 == 0 ? -i:i;
        
        dummy.rotation.x+=((Math.PI/200) + rotator * sign);
        dummy.updateMatrix();
        
        bloodCellInstances.setMatrixAt( i, dummy.matrix.clone() );
    }
    let point = curve.getPoint(mainCell.progress);
    mainCell.progress+= mainCell.velocity * relVel * loopSettings.speed;
    mainCell.progress%=1;
    mainCell.group.position.set(point.x, point.y, point.z);
    const rotation = (Math.PI/200 + (Math.PI * loopSettings.step )) * loopSettings.speed
    mainCell.mesh.rotateOnAxis(new THREE.Vector3(1,1,0).normalize(), rotation )
    mainCell.highlight.rotateOnAxis(new THREE.Vector3(1,1,0).normalize(), rotation )
    bloodCellInstances.instanceMatrix.needsUpdate = true;
    bloodCellInstances.castShadow = true;
    
    
    rotator += 0.0001 * loopSettings.speed;
    relVel -= 0.04 * loopSettings.speed;
    if (relVel<1.009)
        relVel = 3.5;
    // relVel = clamp(relVel, .5, 3);
} 

const getRandomArbitrary = (min:number, max:number)=> Math.random() * (max - min) + min;
const randomOffSet = ()=>getRandomArbitrary(-innerWallRadius, innerWallRadius);


function updateCamera() {  
    adjustCameraForTransforms();
    camera.position.copy(camera.localToWorld(new THREE.Vector3(0, camOption.camTranslateY, 0)) )
    camera.lookAt(mainCell.group.position);
    camera.rotateY(Math.PI*camOption.camRotation);
    camera.lookAt(camera.localToWorld(new THREE.Vector3(0,0,-10))); // or else ray caster is broken
}

function adjustCameraForTransforms(){
    let prog = clamp(mainCell.progress - (0.007), 0, 1);
    const cameraPos = curve.getPoint(prog);
    camera.position.copy(cameraPos);
    const cameraLookAt = mainCell.group.position.clone(); 
    camera.lookAt(...cameraLookAt.toArray());
}

function adjustDummyForLights(){
    let prog = clamp(mainCell.progress - (0.007), 0, 1);
    const position = curve.getPoint(prog);
    lightingDummy.position.copy(position);
    const lookAt = curve.getPoint(mainCell.progress); 
    lightingDummy.lookAt(...lookAt.toArray());
    lightingDummy.updateMatrix()
    lightingDummy.updateMatrixWorld(true);
}

function updateLighting() {
    adjustDummyForLights();

    let prog = clamp(mainCell.progress - (0.007), 0, 1);
    const anchor = curve.getPoint(prog);
    
    const spotlightPosition = lightingDummy.localToWorld(spotlightOffSet.clone());
    spotLight.position.copy(spotlightPosition);
    spotLight.lookAt(anchor);

    pointLight.position.copy(lightingDummy.localToWorld(new THREE.Vector3(0, 0, +depth.z)));

    const directionallightPosition = camera.localToWorld(directionalLightOffset.clone());
    directionalLight.position.copy(directionallightPosition);
    directionalLight.lookAt(anchor);
}

export function play(){
    const homeContainer = document.getElementById('homeContainer') as HTMLDivElement;
    const backButton = document.querySelector(`button.${styles.backButton}`) as HTMLButtonElement
    
    const timeline = gsap.timeline();
    timeline.add('start', 0)

    timeline.to(camOption, {
        camRotation: 0,
        camTranslateZ: 0.003,
        camTranslateY:.9,
        delay: 0,
        duration: 2,
        ease:'expo.inOut',
    }, 'start');

    timeline.to(homeContainer, {
        delay: 0,
        opacity: 0,
        duration: 2,
        onUpdate: ()=>{
        },
        onComplete: () => { 
            orbitControls.enabled = true;
            orbitControls.dampingFactor = .5;
            orbitControls.update();
            sioController.wake();
            activeAnimation = inspectCellAnimation;
            homeContainer.style.display = 'none';
            backButton.style.display = 'block';
        }
    }, 'start');
    
    timeline.to(curveMesh.material, {
        opacity: .4,
        duration: 2,
        delay: 0,
        ease:'expo.inOut',
    }, 'start');


    orbitControls.enabled = false;
    timeline.delay(0);
    timeline.repeat(0);
    
    timeline.play('start').then(()=>{
        timeline.kill();
    })
}

export function backToIdle(){
    const homeContainer = document.getElementById('homeContainer') as HTMLDivElement;
    homeContainer.style.display = 'flex';
    
    const backButton = document.querySelector(`button.${styles.backButton}`) as HTMLButtonElement;
    backButton.style.display = 'none';
    sioController.sleep();

    orbitControls.enabled = false;
    activeAnimation = ()=>{};

    const timeline = gsap.timeline();
    timeline.to(camOption, {
        camRotation: rotationOffsetRight,
        camTranslateZ: 0,
        camTranslateY:1,
        duration: 1,
        delay: 0.001,
        ease:'expo.inOut',
    });

    timeline.to(homeContainer, {
        opacity: 1,
        duration: 1,
        delay: 0,
        onStart: () => { 
            homeContainer.style.display = 'flex';
            backButton.style.display = 'none';
        }
    });

    let progress = 0;
    let complete = false;
    const tweenToIdle = (time:number, deltaTime:number, frame:number) => {
        if(complete)
            return;
        progress+= deltaTime/1000;
        progress = clamp(progress, 0, 1);

        const destination = curve.getPoint(mainCell.progress - 0.007);
        const source = new THREE.Vector3();
        camera.getWorldPosition(source);
        const direction = destination.clone().sub(source);

        const length = direction.length();
        direction.normalize();

        const pointAccros = source.add(direction.multiplyScalar(length*progress));

        camera.position.copy(pointAccros);
        // camera.lookAt(mainCell.group.position);
        camera.position.copy(camera.localToWorld(new THREE.Vector3(0, camOption.camTranslateY*progress, 0)) )
        camera.lookAt(mainCell.group.position);
        camera.rotateY(Math.PI*camOption.camRotation);
        camera.lookAt(camera.localToWorld(new THREE.Vector3(0,0,-10)));

        if(progress>0.99){
            gsap.ticker.remove(tweenToIdle);
            activeAnimation = idleAnimation;
        }
    }

    sioController.sleep();
    gsap.ticker.add(tweenToIdle);
    timeline.play().then( () => {
        activeAnimation = idleAnimation;
        loopSettings.pauseAnimation = false;
        loopSettings.speed = 1;
    }) 
}


function addIfNotInScene(object:THREE.Object3D){
    if(scene.getObjectById(object.id))
        return;
    scene.add(object);
}
function removeIfInScene(object:THREE.Object3D){
    if(scene.getObjectById(object.id))
        scene.remove(object);
}

function setUpTextElements() {
    // throw new Error('Function not implemented.');

    const div = document.createElement('div');
    div.textContent = 'Inspect';
    div.style.color = 'white';
    bloodCellLabel = new CSS2DObject(div);    
}
function inspectRedBloodCell(): any {
    const timeline = gsap.timeline();
    timeline.to(loopSettings, {speed:.000001, duration:1})
    // loopSettings.speed = .000001;
    // loopSettings.progress = 0;
    timeline.play();
    return;
    throw new Error('Function not implemented.');
}

