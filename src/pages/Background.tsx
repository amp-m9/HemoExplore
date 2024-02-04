import { Component, onMount } from "solid-js";
import { initBloodCellAnimation } from "../scripts/animation";
import AnimationsController from "../scripts/animationController";
import styles from '../App.module.css'

const Background: Component = () => {
    const controller = AnimationsController.getInstance();
    onMount(async () => {
        await controller.Initialise();
        controller.AnimateIdle();
    })

    return (
        <div>
            <canvas class={`webgl ${styles.background}`} id='animationContainer' />
            <p id="subtitles" class={styles.subtitles} innerHTML="TESTING TESTING" />
        </div>
    )
}

export default Background;