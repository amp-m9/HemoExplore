import { Component } from "solid-js";
import styles from '../../App.module.css';
import { A } from "@solidjs/router";

export interface SubjectCardProps {
    title: string;
    img: string;
    markdown: string;
}

const SubjectCard: Component<SubjectCardProps> = (props) => {
    console.log(styles.subjectCard);
    return (
        <A href={`${props.markdown}`}>
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