import { Component } from "solid-js";
import styles from '../App.module.css';
import redBloodCellImage from '../assets/objectPngs/RedBloodCell.png'

interface ObjectCardProps {
    image: string,
    title: string,
    onClick: () => any
}

const ObjectCard: Component<ObjectCardProps> = (props) => {
    return (
        <div onClick={props.onClick} class={styles.objectCard}>
            <div class={styles.imageWrapper}>
                <img src={redBloodCellImage} />
            </div>
            <div class={styles.objectCardTitle}>
                {props.title}
            </div>
        </div>
    )
}

export default ObjectCard;