/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react"
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav>
            <p className={styles.title}>Torre.co</p>
            <h4 className={styles.title}>SIGN IN</h4>
        </nav>
        
    )
}