import { Component, createEffect, createSignal, on } from "solid-js";
import styles from '../App.module.css';
import redBloodCellImage from '../assets/objectPngs/RedBloodCell.png'

export interface ObjectDataProps {
    data: string,
    title: string,
    active: boolean
}
function convertStringToHtmlParagraphs(to: string) {
    to = to.replace(/\n{2}/g, '&nbsp;</p><p>');
    to = to.replace(/\n/g, '&nbsp;<br />');
    to = '<p>' + to + '</p>';
    return to;
}

const ObjectDataPane: Component<ObjectDataProps> = (props) => {
    const [active, setActive] = createSignal<boolean>(props.active);
    createEffect(() => {
        setActive(props.active);
    })
    return (
        <div class={styles.objectDataPane} style={active() ? { left: '0' } : { left: '100%', height: '0', "min-height": '0', overflow: 'hidden' }}>
            <div class={styles.objectPaneStickyTop}>
                <button class={styles.objectDataPanebackButton} onClick={() => setActive(false)}> {'< Back'} </button>
                <h2 class={styles.objectDataTitle}>{props.title}</h2>
            </div>
            <div class={styles.objectDataText} innerHTML={convertStringToHtmlParagraphs(props.data) + convertStringToHtmlParagraphs(props.data)}></div>
        </div>
    )
}

export default ObjectDataPane;