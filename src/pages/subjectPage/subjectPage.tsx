import { onMount, type Component, createSignal } from 'solid-js';
import styles from '../../App.module.css';
import { expandCanvasToWindow, initialise3DCanvas } from '../learn/learnAnimation';
import { learnDB, LearnSubjectProps } from '../learn/learnContentDB';
import { useParams } from '@solidjs/router';
import { micromark } from 'micromark';



const SubjectPage: Component = () => {
    const params = useParams<{ slug: string }>();
    const [panelProps, setPanelProps] = createSignal<LearnSubjectProps>(learnDB[`${params.slug.toLowerCase()}`]);

    const markdownFile = new URL(`../../markdown/${params.slug}.md`, import.meta.url);
    fetch(markdownFile).then(r => {
        r.text().then(r => {
            if (r) {
                const markdown = micromark(r);
                setPanelProps({ ...learnDB[`${params.slug}`], markdown });
            }
        })
    });

    onMount(initialise3DCanvas);

    return (
        <div class={`${styles.learnPage}`} >
            <div class={styles.learnPanelWrapper}>
                <div class={styles.bgBlur} />
                <div class={styles.learnPanelMiddle}>
                    <div class={styles.learnPanelHeader}>
                        <h1>{panelProps().title}</h1>
                        <h2>{panelProps().subTitle}</h2>
                    </div>
                    <div class={styles.learnPanelBody} innerHTML={panelProps().markdown} />
                </div>
                <div class={styles.learnPanelRight}>
                    <div class={styles.learnPanelRightElement}>
                        <div class={styles.canvasWrapper} id='canvasWrapper'>
                            <canvas class={styles.learnPanelCanvas} id='modelPane' />
                        </div>
                        <div class={styles.dataRepeat}>
                            <h3>Summary</h3>
                            <p style={{ 'padding-bottom': 0 }}>{panelProps().summary}</p>
                        </div>
                    </div>
                    <div class={styles.learnPanelRightElement}>
                        next {'>'}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SubjectPage;