import React from "react";
import styles from "./Expert.module.css";
import { FaRunning } from "react-icons/fa";

export default function Interest() {
  return (
    <main className={styles.interest}>
      <p className={styles.header}><FaRunning /> Expert</p>
      <p className={styles.texts}>Leadership </p>
      <p className={styles.texts2}>Web Development</p>
      <p className={styles.texts3}>Unit testing</p>
    </main>
  );
}
