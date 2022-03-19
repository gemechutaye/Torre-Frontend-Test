import React from "react";
import styles from "./Info.module.css";
import ProfilePicture from "../assets/Ge200.jpg";
import Hexagon from './Hexagon'
import { MdOutlineVerified } from 'react-icons/md';


export default function Info() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Hexagon backgroundImage={ProfilePicture} style={{stroke: '#828282'}}>
            <foreignObject className="foreign-object" x="0%" y="25%" width="100%">
              <p style={{padding: 20, textAlign: 'center'}}>
                HTML text!<br />
                <span style={{fontSize: '0.5em'}}>(not universally supported)</span>
              </p>
            </foreignObject>
          </Hexagon>
      </header>
      <div className={styles.bio}>
        <h1 className={styles.name}>Gemechu Taye <MdOutlineVerified /></h1>
        <div className={styles.contacts}>
          
        </div>
      </div>
    

    </div>
  );
}