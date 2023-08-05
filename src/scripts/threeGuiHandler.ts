import * as THREE from "three";

export interface SceneInteractiveObject {
    object:
        | THREE.Object3D
        | THREE.Group;
    highlighted: boolean;
    highlightFunction:
        | (() => any)
        | undefined;
    unHighlightFunction:
        | (() => any)
        | undefined;
    callbackFunction:
        | (() => any)
        | undefined;
}

export class SIOController {
    interactiveObjects: Array<SceneInteractiveObject>;
    disabledObjects: Array<SceneInteractiveObject>;
    mousePosition: THREE.Vector2;
    rayCaster: THREE.Raycaster;
    camera: THREE.Camera;
    intersected:
        | THREE.Intersection<
              THREE.Object3D<THREE.Event>
          >[]
        | undefined;
    private awake: boolean;

    constructor(
        _camera: THREE.Camera,
        canvas: HTMLCanvasElement,
        _awake = true
    ) {
        this.interactiveObjects =
            new Array<SceneInteractiveObject>();
        this.disabledObjects =
            new Array<SceneInteractiveObject>();
        this.mousePosition =
            new THREE.Vector2();
        this.rayCaster =
            new THREE.Raycaster();
        this.camera =
            _camera;
        this.awake =
            _awake;

        window.addEventListener(
            "mousemove",
            (
                event
            ) => {
                if (
                    !this
                        .awake
                )
                    return;
                const rect =
                    canvas.getBoundingClientRect();
                this.mousePosition.x =
                    ((event.clientX -
                        rect.left) /
                        rect.width) *
                        2 -
                    1;
                this.mousePosition.y =
                    ((event.clientY -
                        rect.top) /
                        rect.height) *
                        2 -
                    1;
                this.update();
            }
        );

        canvas.addEventListener(
            "click",
            (
                e
            ) => {
                this.getSelected().sio?.unHighlightFunction();
                this.getSelected().sio?.callbackFunction();
            }
        );
    }

    onMouseMove(
        e: MouseEvent
    ) {
        this.mousePosition.x =
            (e.clientX /
                window.innerWidth) *
                2 -
            1;
        this.mousePosition.y =
            (e.clientY /
                window.innerHeight) *
                2 -
            1;
    }

    update() {
        this.rayCaster.setFromCamera(
            this
                .mousePosition,
            this
                .camera
        );
        const clickObj =
            this.interactiveObjects.map(
                (
                    item
                ) =>
                    item.object
            );
        this.intersected =
            this.rayCaster.intersectObjects(
                clickObj
            );
        let activeIndex: number =
            -1;
        let interactiveObject;

        if (
            this
                .intersected
                .length >
            0
        ) {
            document.body.style.cursor =
                "pointer";
            const result =
                this.getSelected();
            [
                activeIndex,
                interactiveObject,
            ] =
                [
                    result.i,
                    result.sio,
                ];
            if (
                interactiveObject ==
                    undefined ||
                interactiveObject.highlighted ||
                interactiveObject.highlightFunction ==
                    undefined
            )
                return;
            interactiveObject.highlightFunction();
        } else
            document.body.style.cursor =
                "auto";

        for (
            let i = 0;
            i <
            this
                .interactiveObjects
                .length;
            i++
        ) {
            if (
                i ==
                    activeIndex ||
                !this
                    .interactiveObjects[
                    i
                ]
                    .highlighted
            )
                return;
            this.interactiveObjects[
                i
            ].unHighlightFunction();
        }

        if (
            !(
                this
                    .intersected
                    .length >
                0
            )
        )
            document.body.style.cursor =
                "auto";
    }

    getSelected() {
        let activeIndex =
            -1;
        const objectsSelected =
            this
                .intersected !=
                undefined &&
            this
                .intersected
                .length >
                0;

        const object =
            this.interactiveObjects.find(
                (
                    interactiveObject,
                    i
                ) => {
                    activeIndex =
                        i;

                    if (
                        interactiveObject
                            .object
                            .isGroup
                    ) {
                        const group =
                            interactiveObject.object as THREE.Group;
                        const matching =
                            group.children.find(
                                (
                                    child
                                ) =>
                                    child.id ==
                                    this
                                        .intersected[0]
                                        .object
                                        .id
                            );
                        return (
                            matching !=
                            undefined
                        );
                    }
                    return (
                        objectsSelected &&
                        interactiveObject
                            .object
                            .id ==
                            this
                                .intersected[0]
                                .object
                                .id
                    );
                }
            );
        return {
            i: activeIndex,
            sio: object,
        };
    }

    wake =
        () =>
            (this.awake =
                true);
    sleep =
        () =>
            (this.awake =
                false);
    addInteractiveObject(
        clickable: SceneInteractiveObject
    ) {
        this.interactiveObjects.push(
            clickable
        );
    }
    disableObject(
        object: THREE.Object3D
    ) {
        const sceneInteractiveObject =
            this.moveObjectById(
                object,
                false
            );

        if (
            sceneInteractiveObject ==
            undefined
        )
            return;

        if (
            sceneInteractiveObject.highlighted &&
            sceneInteractiveObject.unHighlightFunction !=
                undefined
        )
            sceneInteractiveObject.unHighlightFunction();
    }

    enableObject(
        object: THREE.Object3D
    ) {
        const sceneInteractiveObject =
            this.moveObjectById(
                object,
                true
            );

        if (
            sceneInteractiveObject ==
            undefined
        )
            return;

        if (
            sceneInteractiveObject.highlighted &&
            sceneInteractiveObject.highlightFunction !=
                undefined
        )
            sceneInteractiveObject.highlightFunction();
    }

    moveObjectById(
        object: THREE.Object3D,
        enable: boolean
    ) {
        let index = 0;
        const from =
            enable
                ? this
                      .disabledObjects
                : this
                      .interactiveObjects;
        const to =
            !enable
                ? this
                      .disabledObjects
                : this
                      .interactiveObjects;

        const sceneInteractiveObject =
            from.find(
                (
                    v,
                    i
                ) => {
                    index =
                        i;
                    return (
                        v
                            .object
                            .id ==
                        object.id
                    );
                }
            );
        if (
            sceneInteractiveObject ==
            undefined
        )
            return;

        from.splice(
            index,
            1
        );
        to.push(
            sceneInteractiveObject
        );

        return sceneInteractiveObject;
    }
}
