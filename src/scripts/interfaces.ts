export interface CellData {
    offset: THREE.Vector3;
    progress: number;
    velocity: number;
}
export  interface Cell {
    mesh: THREE.Mesh;
    group: THREE.Group;
    highlight: THREE.Mesh;
}

export interface MainCell extends CellData, Cell { }

export interface BloodVessel {
    innerVesselMesh: THREE.Mesh,
    outerVesselMesh: THREE.Mesh,
    path: THREE.CatmullRomCurve3,
}
