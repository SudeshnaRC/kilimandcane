import React from "react";
import styles from "./Contact.module.css";
import bathroom from "../assets/images/bathroom.jpg";

function Contact() {
  return (<main>
    <div className={styles.mainContainer}>
        <h2 className={styles.title}>CONTACT KILIM+CANE</h2>
        <div className={styles.subContainer}>
            <div className={styles.contactInfo}>
                <p className={styles.subHeading} >GENERAL INQUIRIES</p>
                <p className={styles.info}>INQUIRIES@KILIMANDCANE.COME</p>
                <p className={styles.subHeading}>SOCIAL MEDIA</p>
            </div>
            <img src={bathroom} className={styles.contactImage} alt="Bright Bathroom" />
        </div>
        <h2 className={styles.title}>CONNECT WITH TIMELESS TASTE</h2>
        
    </div>
  </main>);
}

export default Contact;
