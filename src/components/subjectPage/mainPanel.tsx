import { onMount, type Component, createSignal, createEffect, Show } from 'solid-js';
import styles from '../../App.module.css';
import expandSvg from '../../assets/icons/expand.svg'
import redBloodCellImage from '../../assets/objectPngs/RedBloodCell.png'
import Navbar from '../navbar';
import { expandCanvasToWindow, initialise3DCanvas } from '../learn/learnAnimation';
import { pause } from '../../scripts/animation';

export interface PanelProps {
    active: boolean,
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
    const [panelProps, setPanelProps] = createSignal<PanelProps>(props)
    onMount(() => { initialise3DCanvas(); setTimeout(() => pause(), 5000) });
    createEffect(() => {
        setPanelProps(props);
    })
    const loadInfographic = () => {
        if (panelProps().active)
            return true;

        return false;
    }
    return (
        <Show
            when={loadInfographic()}
            fallback={<div></div>}
        >
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
                    <div class={styles.canvasWrapper} id='canvasWrapper'>
                        <canvas class={styles.learnPanelCanvas} id='modelPane' />
                        {/* <button class={styles.canvasExpandButton} onClick={expandCanvasToWindow}><img src={expandSvg} alt="" /></button> */}
                    </div>
                    <div class={styles.dataRepeat}>
                        <h3>Summary</h3>
                        <p>{panelProps().summary}</p>
                    </div>
                </div>
            </div>
        </Show>
    );
};

export default MainLearnPanel;