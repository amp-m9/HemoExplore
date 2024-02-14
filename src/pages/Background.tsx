import { Component, onCleanup, onMount } from "solid-js";
import AnimationsController from "../scripts/animation";
import styles from '../App.module.css'

const Background: Component = () => {
    const controller = AnimationsController.getInstance();
    onMount(async () => {
        await controller.Initialise();
        controller.AnimateIdle();
    })
    onCleanup(controller.ShutDown)
    return (
        <div>
            <canvas class={`webgl ${styles.background}`} id='animationContainer' />
            {/* <p id="subtitles" class={styles.subtitles} innerHTML="TESTING TESTING" /> */}
            {/* <div id='subtitlesContainer' class={styles.subtitlesContainer}> */}
            {/* </div> */}
        </div>
    )
}

export default Background;