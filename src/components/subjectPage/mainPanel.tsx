import { onMount, type Component, createSignal, createEffect, Show } from 'solid-js';
import styles from '../../App.module.css';
import expandSvg from '../../assets/icons/expand.svg'
import redBloodCellImage from '../../assets/objectPngs/RedBloodCell.png'
import Navbar from '../navbar';
import { expandCanvasToWindow, initialise3DCanvas } from '../learn/learnAnimation';
import { pause } from '../../scripts/animation';

export interface PanelProps {
    title: string | undefined,
    subTitle: string | undefined,
    summary: string | undefined,
    markdown: string | undefined,
}

function convertStringToHtmlParagraphs(to: string) {
    to = to.replace(/\n{2}/g, '&nbsp;</p><p>');
    to = to.replace(/\n/g, '&nbsp;<br />');
    to = '<p>' + to + '</p>';
    return to + to + to;
}

const MainLearnPanel: Component<PanelProps> = (props) => {
    onMount(initialise3DCanvas);
    return (
        <div class={styles.learnPanelWrapper}>
            <div class={styles.bgBlur} />
            <div class={styles.learnPanelMiddle}>
                <div class={styles.learnPanelHeader}>
                    <h1>{props.title}</h1>
                    <h2>{props.subTitle}</h2>
                </div>
                <div class={styles.learnPanelBody} innerHTML={props.markdown} />
            </div>
            <div class={styles.learnPanelRight}>
                <div class={styles.canvasWrapper} id='canvasWrapper'>
                    <canvas class={styles.learnPanelCanvas} id='modelPane' />
                    {/* <button class={styles.canvasExpandButton} onClick={expandCanvasToWindow}><img src={expandSvg} alt="" /></button> */}
                </div>
                <div class={styles.dataRepeat}>
                    <h3>Summary</h3>
                    <p>{props.summary}</p>
                </div>
            </div>
        </div>
    );
};

export default MainLearnPanel;