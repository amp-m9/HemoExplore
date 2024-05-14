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
        <canvas class={styles.background} id='animationContainer' />
    )
}

export default Background;