import { onMount, type Component } from 'solid-js';
import styles from './App.module.css';
import { initBloodCellAnimation, play as start, enableCompare } from './scripts/animation';
import InspectorPane from './components/inspectorPane';

const App: Component = () => {


  onMount(initBloodCellAnimation)
  return (
    <div>
      <div id='inspectorUIDiv' class={styles.inspectorUI}>
        <button style={{ "pointer-events": 'auto' }} onClick={enableCompare}> COMPARE</button>

      </div>

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
      <InspectorPane />
      <button id="backButton" class={styles.backButton}>back</button>
    </div>
  );
};

export default App;
