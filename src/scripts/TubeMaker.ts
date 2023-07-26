import * as THREE from 'three';
import { CSG } from 'three-csg-ts';

export default interface BuildData {
    mainVessel: THREE.BufferAttribute,
    capillary: THREE.BufferAttribute,
    curve: Array<THREE.Vector3>
}

self.onmessage = (e: MessageEvent<BuildData>) => {
  self.postMessage(buildTube(e.data))
};
  
function buildTube(buildData:BuildData){
    const capillaryGeo = new THREE.BufferGeometry().setAttribute('position', buildData.capillary);
    const capillaryMesh = new THREE.Mesh(capillaryGeo);
    
    const outerVesselGeo = new THREE.BufferGeometry().setAttribute('position', buildData.mainVessel);
    let outerVesselMesh = new THREE.Mesh(outerVesselGeo);
    
    const curve = new THREE.CatmullRomCurve3(buildData.curve);
    console.log(curve)
    capillaryMesh.updateMatrix();
    outerVesselMesh.updateMatrix();
    
    const rotationAxis = new THREE.Vector3();
    const axisStart = new THREE.Vector3();
    const axisEnd = new THREE.Vector3();
    
    for (let i = 0; i<10; i++){
        console.log("Adding Capilliary ", i, '/', 9);
        let point = (i+1)/11;
        axisStart.copy(curve.getPoint(point))
        axisEnd.copy(curve.getPoint(point + (1/1000)))
        rotationAxis.subVectors(axisEnd, axisStart).normalize();

        capillaryMesh.position.copy(axisStart);
        capillaryMesh.rotateOnAxis( rotationAxis, Math.PI * 2* Math.sin(i/4));
        capillaryMesh.updateMatrix();
        
        outerVesselMesh.updateMatrix();
        outerVesselMesh = CSG.subtract(capillaryMesh, outerVesselMesh);
    }
    return outerVesselMesh.geometry.attributes.position.clone();
}
export {};
