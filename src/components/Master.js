import React from "react";
import styles from "./Master.module.css";
import { FaRunning } from 'react-icons/fa';

export default function About() {
  return (
    <main className={styles.about}>
      <p className={styles.header}> Skills and interest: </p>
      <p className={styles.header}><FaRunning /> Master / Infulencer</p>
      <p className={styles.texts2}>Software Development </p>
      <p className={styles.texts2}>Team management </p>
      
    </main>
  );
}