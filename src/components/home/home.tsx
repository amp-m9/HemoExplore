import { onMount, type Component } from 'solid-js';
import { A } from '@solidjs/router';
import styles from '../../App.module.css';
import { initBloodCellAnimation, startJourney as start, enableCompare } from '../../scripts/animation';

const Home: Component = () => {
    return (
        <div>
            <div id='homeContainer' class={`${styles.homeContainer}`}>
                <div class={styles.homeBody}>
                    <div class={styles.homeTitle}>
                        <h1>HEMOEXPLORE</h1>
                        <h2>JOURNEY INTO THE BLOODSTREAM</h2>
                        <div>
                            <nav>
                                <ul>
                                    <li onClick={start}> <A href='/HemoExplore/'> Start</A></li>
                                    <li><A href='/HemoExplore/Learn'>Learn</A></li>
                                    <li><A href='/HemoExplore/Quizzes'>Quizzes & Challenges</A></li>
                                    <li><A href='/HemoExplore/About'>About</A></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <button id="backButton" class={styles.backButton}>back</button>
        </div>
    );
};

export default Home;