import { Component } from "solid-js";
import styles from '../App.module.css';
import { A } from "@solidjs/router";
import logo from '../assets/icons/hemoExploreLogo.svg'
// interface navbarProps

const Navbar: Component = () => {
    return (
        <div class={styles.navbar}>
            <A activeClass={styles.activeHome} end={true} href='/HemoExplore/' style={{ width: '40px', height: 'min-content', margin: 'auto 0' }}>
                <img style={{ "object-fit": 'contain', width: 'inherit', height: 'inherit', fill: 'red' }} src={logo} />
            </A>
            <nav>
                <ul>
                    <li><A activeClass={styles.activeLink} href='/HemoExplore/Learn'>Learn</A></li>
                    <li><A activeClass={styles.activeLink} href='/HemoExplore/Quizzes'>Quizzes & Challenges</A></li>
                    <li><A activeClass={styles.activeLink} href='/HemoExplore/About'>About</A></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;

