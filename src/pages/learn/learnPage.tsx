import { type Component, For } from 'solid-js';
import styles from '../../App.module.css';
import { learnDB } from './learnContentDB';
import SubjectCard from './SubjectCard';

const Learn: Component = () => {

    return (
        <div class={`${styles.learnPage}`} >
            <div class={styles.bgBlur} />
            <div class={styles.learnPageGrid}>
                <For each={Object.values(learnDB)} fallback={<div />}>
                    {(item, index) => (
                        <SubjectCard
                            title={item.title}
                            img={item.icon}
                            markdown={Object.keys(learnDB)[index()]} />
                    )}
                </For>
            </div>
        </div >
    );
};

export default Learn;