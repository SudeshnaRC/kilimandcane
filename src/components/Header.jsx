import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p className={styles.semiboldText}>VINTAGIO</p>
        <p className={styles.semiboldText}>MENU</p>
      </div>
    </header>
  );
}

export default Header;
