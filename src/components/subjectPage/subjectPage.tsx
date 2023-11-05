import { type Component, createSignal } from 'solid-js';
import styles from '../../App.module.css';
import MainLearnPanel, { PanelProps } from './mainPanel';
import learnDB from '../learn/learnContentDB';
import { useParams } from '@solidjs/router';
import { micromark } from 'micromark';



const SubjectPage: Component = () => {
    const [panelProps, setPanelProps] = createSignal<PanelProps>({ active: false, title: undefined, subTitle: undefined, summary: undefined, markdown: undefined })
    const params = useParams<{ slug: string }>();
    const markdownFile = new URL(`../../markdown/${params.slug}.md`, import.meta.url);
    fetch(markdownFile).then(r => {
        r.text().then(r => {
            learnDB.RBC.markdown = micromark(r);
            setPanelProps(learnDB.RBC);
        })
    });

    return (
        <div class={`${styles.learnPage}`} >
            <MainLearnPanel
                title={panelProps().title}
                subTitle={panelProps().subTitle}
                markdown={panelProps().markdown}
                summary={panelProps().summary}
            />
        </div >
    );
};

export default SubjectPage;