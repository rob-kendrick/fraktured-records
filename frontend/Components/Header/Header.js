import React from "react";
import styles from "../../styles/components/header/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header__container}>
      <ul className={styles.header__list}>
        <li className={styles.list__item}>About</li>
        <li className={styles.list__divider}>|</li>
        <li className={styles.list__item}>Artists</li>
        <li className={styles.list__divider}>|</li>
        <li className={styles.list__item}>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
