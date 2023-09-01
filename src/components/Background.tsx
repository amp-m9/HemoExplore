import { Component, onMount } from "solid-js";
import { initBloodCellAnimation } from "../scripts/animation";
import styles from '../App.module.css'

const Background: Component = () => {
    onMount(initBloodCellAnimation);
    return (
        <div>
            <canvas class={`webgl ${styles.background}`} id='animationContainer' />
            <p id="subtitles" class={styles.subtitles} innerHTML="TESTING TESTING" />
            {/* <div id='subtitlesContainer' class={styles.subtitlesContainer}> */}
            {/* </div> */}
        </div>
    )
}

export default Background;