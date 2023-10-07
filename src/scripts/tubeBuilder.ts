import { CatmullRomCurve3, TubeGeometry, TypedArray, Vector3Tuple } from "three";
import { generateVesselCurveFromStartPoints } from "./noise";
export interface tubeGenSendMessage {
    endOfTube: Vector3Tuple[],
    noiseStart:number;
    curvePointCount: number,
    innerWallRadius: number,
    outerWallRadius: number,
    tubularSegments: number,
    radialSegments: number,
}

export interface tubeGenReceiveMessage {
    innerTubePositionAttrib: TypedArray,
    innerTubeIndexAttrib: TypedArray,
    pathPoints: Vector3Tuple[],
}

self.addEventListener('message', function (message: MessageEvent<tubeGenSendMessage>) {
    const { 
        noiseStart,
        endOfTube, 
        curvePointCount, 
        innerWallRadius, 
        outerWallRadius,
        tubularSegments,
        radialSegments 
    } = message.data;
    console.log('received:',message.data);
    const curvePoints = generateVesselCurveFromStartPoints(endOfTube, curvePointCount, noiseStart)
    const path = new CatmullRomCurve3(curvePoints);


    const innerVesselGeometry = new TubeGeometry(
        path,
        tubularSegments,
        innerWallRadius,
        radialSegments
    );

    const outerVesselGeometry = new TubeGeometry(
        path,
        tubularSegments,
        outerWallRadius,
        radialSegments
    );

    const __message__:tubeGenReceiveMessage = {
        innerTubePositionAttrib: innerVesselGeometry.attributes.position.array,
        innerTubeIndexAttrib: outerVesselGeometry.index?.array,
        pathPoints: path.points.map(v=>v.toArray()),
    }
    this.self.postMessage(__message__);
});

