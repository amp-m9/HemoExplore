import { onMount, type Component } from 'solid-js';
import styles from './App.module.css';
import { initBloodCellAnimation, play as start, backToIdle } from './scripts/animation';

const App: Component = () => {
  onMount(initBloodCellAnimation)
  return (
    <div>
      <canvas class={`webgl ${styles.background}`} id='animationContainer' />
      <div id='homeContainer' class={`${styles.homeContainer}`}>
        <div class={styles.homeBody}>
          <div class={styles.homeTitle}>
            <h1>HEMOEXPLORE</h1>
            <h2>JOURNEY INTO THE BLOODSTREAM</h2>
            <div class='flex-wrapper'>
              <nav>
                <ul>
                  <li onClick={start}><a>Start</a></li>
                  <li><a href='/Learn'>Learn</a></li>
                  <li><a href='/Quizzes'>Quizzes & Challenges</a></li>
                  <li><a href='/About'>About</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <button class={styles.backButton} onClick={backToIdle}>back</button>
    </div>
  );
};

export default App;
