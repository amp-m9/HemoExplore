import { Component } from "solid-js";
import styles from '../App.module.css';
import redBloodCellImage from '../assets/objectPngs/RedBloodCell.png'

// interface navbarProps

const Navbar: Component = () => {
    return (
        <div class={styles.navbar}>
            <nav>
                <ul>
                    <li><a class={styles.active} href='/HemoExplore/Learn'>Learn</a></li>
                    <li><a href='/HemoExplore/Quizzes'>Quizzes & Challenges</a></li>
                    <li><a href='/HemoExplore/About'>About</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;

