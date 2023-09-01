import { Component } from "solid-js";
import styles from '../App.module.css';
import { A } from "@solidjs/router";
import redBloodCellImage from '../assets/objectPngs/RedBloodCell.png'
import logo from '../assets/icons/hemoExploreLogo.svg'
// interface navbarProps

const Navbar: Component = () => {
    return (
        <div class={styles.navbar}>
            <A href='/HemoExplore/' style={{ width: '40px', height: 'min-content', margin: 'auto 0' }}>
                <img style={{ "object-fit": 'contain', width: 'inherit', height: 'inherit' }} src={logo} />
            </A>
            <nav>
                <ul>
                    <li><A class={styles.active} href='/HemoExplore/Learn'>Learn</A></li>
                    <li><A href='/HemoExplore/Quizzes'>Quizzes & Challenges</A></li>
                    <li><A href='/HemoExplore/About'>About</A></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;

