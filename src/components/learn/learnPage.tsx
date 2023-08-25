import { onMount, type Component, createSignal } from 'solid-js';
import styles from '../../App.module.css';
import MainLearnPanel, { PanelProps } from '../subjectPage/mainPanel';
import Navbar from '../navbar';
import learnDB from './learnContentDB';
import { useParams } from '@solidjs/router';
import SubjectCard from './SubjectCard';
import whiteBloodCellIcon from '../../assets/icons/white-blood-cell.svg'
import redBloodCellIcon from '../../assets/icons/blood.svg'
import sickleCellIcon from '../../assets/icons/sickle.svg'

const Learn: Component = () => {
    // const [panelProps, setPanelProps] = createSignal<PanelProps>({ active: false, title: undefined, subTitle: undefined, summary: undefined, markdown: undefined })

    return (
        <div class={`${styles.learnPage}`} >
            <div class={styles.bgBlur} />
            <div class={styles.learnPageGrid}>
                <SubjectCard title='Red Blood Cells' img={redBloodCellIcon} markdown="redBloodCell" />
                {/* <SubjectCard title='White Blood Cells' img={whiteBloodCellIcon} />
                <SubjectCard title='Sickle Cell Anaemia' img={sickleCellIcon} /> */}
            </div>
        </div >
    );
};

export default Learn;