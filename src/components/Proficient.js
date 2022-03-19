import React from "react";
import styles from "./Proficient.module.css";
import { FaRunning } from "react-icons/fa";

export default function Interest() {
  return (
    <main className={styles.interest}>
      <p className={styles.header}><FaRunning /> Proficient</p>
      <p className={styles.texts}>Unit testing</p>
      <p className={styles.texts2}>Data Analysis</p>
    </main>
  );
}
