import { type Component, For, onMount } from 'solid-js';
import styles from '../../App.module.css';
import { learnDB } from './learnContentDB';
import SubjectCard from './SubjectCard';
import AnimationsController from '../../scripts/animation';

const Learn: Component = () => {
    onMount(() => {
        const controller = AnimationsController.getInstance();
        controller.TransitionToLearn();
    });


    return (
        <div class={`${styles.belowNav} ${styles.learn}`} >
            <div class={styles.learnPageContents}>
                <h1 class={styles.heading}>LEARN</h1>
                <ul style={{ "padding-left": '100px' }}>
                    <li class={styles.subheading}> CELLS</li>
                    <ul class={styles.subsubheading}>
                        <li>RED BLOOD CELLS</li>
                        <li>WHITE BLOOD CELLS</li>
                        <li>PLATELETS</li>
                        <li>PLASMA</li>
                    </ul>
                </ul>
                <ul style={{ "padding-left": '100px' }}>
                    <li class={styles.subheading}> CONDITIONS</li>
                    <ul class={styles.subsubheading}>
                        <li>ANAEMIA</li>
                        <li>LEUKEMIA</li>
                    </ul>
                </ul>
            </div>
        </div >
    );
};

export default Learn;