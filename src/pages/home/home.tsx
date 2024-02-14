import { onMount, type Component } from 'solid-js';
import { A } from '@solidjs/router';
import styles from '../../App.module.css';

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
            <p class={styles.credits}>
                sounds from <a href='https://www.zapsplat.com/'>zapsplat.com</a>
            </p>
        </div>
    );
};

export default Home;