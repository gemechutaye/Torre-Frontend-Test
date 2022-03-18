/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react"
import styles from "./Navbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";

export default function Navbar() {
    return (
        <nav>
            <p className={styles.title}>Torre.<span className={styles.title2}>CO</span></p>
            <h4 className={styles.title3}> <  AiOutlineSearch /> SIGN IN</h4>
        </nav>
        
    )
}