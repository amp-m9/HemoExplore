import { Component, onMount } from "solid-js";
import { initBloodCellAnimation } from "../scripts/animation";
import styles from '../App.module.css'

const Background: Component = () => {
    onMount(initBloodCellAnimation);
    return (
        <canvas class={`webgl ${styles.background}`} id='animationContainer' />
    )
}

export default Background;