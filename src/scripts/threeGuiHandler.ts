import * as THREE from "three";

export interface SceneInteractiveObject {
    object: THREE.Object3D,
    highlighted: boolean,
    highlightFunction: (()=>any) | undefined,
    unHighlightFunction: (()=>any) | undefined,
    callbackFunction:(()=>any) | undefined,
}


export class SIOController{
    interactiveObjects:Array<SceneInteractiveObject>;
    mousePosition: THREE.Vector2;
    rayCaster: THREE.Raycaster;
    camera: THREE.Camera;
    intersected: THREE.Intersection<THREE.Object3D<THREE.Event>>[] | undefined;
    readonly awake:boolean;
    
    constructor(_camera:THREE.Camera, canvas:HTMLCanvasElement, _awake = true){
        this.interactiveObjects = new Array<SceneInteractiveObject>();
        this.mousePosition = new THREE.Vector2();
        this.rayCaster = new THREE.Raycaster();
        this.camera = _camera;
        this.awake = _awake;

        window.addEventListener('mousemove', (e)=>{
            if(!this.awake)
                return;
            this.mousePosition.x = (e.clientX/window.innerWidth) * 2 - 1;
            this.mousePosition.y = (e.clientY/window.innerHeight) * 2 - 1;  
            this.update(); 
        });

        canvas.addEventListener('click', (e)=>{
            this.getSelected().sio?.callbackFunction();
            console.log("runnin yo")
        })
    }

    onMouseMove(e:MouseEvent){
        this.mousePosition.x = (e.clientX/window.innerWidth) * 2 - 1;
        this.mousePosition.y = (e.clientY/window.innerHeight) * 2 - 1;
    }

    update(){
        this.rayCaster.setFromCamera(this.mousePosition, this.camera);
        const clickObj = this.interactiveObjects.map((item)=>item.object);
        this.intersected = this.rayCaster.intersectObjects(clickObj);
        let activeIndex:number = -1;
        let interactiveObject;

        if (this.intersected.length>0){
            document.body.style.cursor = 'pointer';
            const result = this.getSelected();
             [activeIndex, interactiveObject] = [result.i, result.sio];
    
            if(interactiveObject == undefined || interactiveObject.highlighted || interactiveObject.highlightFunction == undefined)
                return;
            interactiveObject.highlightFunction()
        }
    
        for(let i = 0; i<this.interactiveObjects.length; i++){
            if(i == activeIndex || !this.interactiveObjects[i].highlighted)
                return;
            this.interactiveObjects[i].unHighlightFunction();
        }
        
        if(!(this.intersected.length>0))
            document.body.style.cursor = 'auto';
    }

    getSelected(){
        let activeIndex = -1;
        const object = this.interactiveObjects.find((interactiveObject, i)=>{
            activeIndex = i;
            if(interactiveObject.object.constructor.name == 'Group'){
               return (interactiveObject.object as THREE.Group).getObjectById(this.intersected[0].object.id) != undefined
            }
            return interactiveObject.object.id == this.intersected[0].object.id
        })
        return{i:activeIndex, sio:object}
    }
    
    wake = () => this.awake = true;
    sleep = () => this.awake = false;
    addInteractiveObject(clickable:SceneInteractiveObject){
        this.interactiveObjects.push(clickable);
    }
}
