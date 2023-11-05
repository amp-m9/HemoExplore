import { Vector3, Vector3Tuple } from "three";
import { createNoise2D } from "simplex-noise";

const noise = createNoise2D();
console.log(noise);
export function generateVesselCurveFromStartPoints(pathStart:Vector3Tuple[], curvePointCount: number,noise_offset:number) {
    let curvePoints = new Array<Vector3>(2 * curvePointCount + 1);
    const overlap = pathStart.length;
    for(var i=0; i<overlap; i++){
        curvePoints[i] = new Vector3().fromArray(pathStart[i]); 
    }
    console.log(noise_offset);
    for (let i = overlap; i < 2 * curvePointCount + 1; i++) {
        const _i = i + noise_offset-1;
        const point = new Vector3(
            noise(_i * 0.001, (_i / 13) * 0.1) * 150, // x
            noise(_i * 0.001, 0.1)*100, // y
            (_i * 5) // z
        );
        curvePoints[i] = point;
    }
    return curvePoints;
}

export function generateVesselCurve(x: number, y: number, z: number, curvePointCount: number) {
    let curvePoints = new Array<THREE.Vector3>(2 * curvePointCount + 1);
    let i = 0;
    for (; i < 2 * curvePointCount + 1; i++) {
        const point = new Vector3(
            x + noise(i * 0.001, (i / 13) * 0.1) * 150, // x
            y + noise(i * 0.001, 0.1) * 100,                  // y
            z + (i * 5)                                 // z
        );
        curvePoints[i] = point;
    }
    console.log('NOISE ENDING I:', i)
    return curvePoints;
}
