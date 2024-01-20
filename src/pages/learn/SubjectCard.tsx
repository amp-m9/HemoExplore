import { Component } from "solid-js";
import styles from '../../App.module.css';
import { A, Router } from "@solidjs/router";

export interface SubjectCardProps {
    title: string;
    img: string;
    markdown: string;
}

const SubjectCard: Component<SubjectCardProps> = (props) => {
    return (

        <A href={`/HemoExplore/Learn/${props.markdown}`}>
            <div class={styles.subjectCard}>
                <h3>{props.title}</h3>
                <div class={styles.subjectCardImageWrapper}>
                    <img src={props.img} />
                </div>
            </div>
        </A>
    )
}
export default SubjectCard;