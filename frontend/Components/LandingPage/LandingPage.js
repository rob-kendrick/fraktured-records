import React from "react";
import styles from "../../styles/components/landing-page/LandingPage.module.css";
import Typical from "react-typical";

const LandingPage = () => {
  return (
    <div className={styles.landingpage__container}>
      <span className={styles.text__container}>
        <h1 className={styles.title}>FRAKTVRED</h1>
        <div className={styles.description}>
          <p className={styles.welcome}>Welcome to</p>
          {/* <br /> */}
          <p>
            <code className={styles.code}>Frakvred Records</code>
          </p>
        </div>
        <p className={`${styles.line} ${styles.anim_typewriter} `}>
          Scroll to find out more...
        </p>
      </span>
    </div>
  );
};

export default LandingPage;
