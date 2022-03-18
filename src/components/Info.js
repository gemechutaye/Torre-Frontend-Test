import React from "react";
import styles from "./Info.module.css";
import ProfilePicture from "../assets/Ge200.jpg";
import emailLogo from "../assets/Email-logo.png";


export default function Info() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          className={styles.avatar}
          src={ProfilePicture}
          alt="Gemechu Taye"
        />
      </header>
      <div className={styles.bio}>
        <h1 className={styles.name}>Gemechu Taye</h1>
        <div className={styles.contacts}>
          
        </div>
      </div>
    </div>
  );
}



