import React from "react";
import styles from "./Header.module.css";
import NavigationMenu from "./NavigationMenu";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p className={styles.semiboldText}>KILIM&CANE</p>
        <div className={styles.menuContainer}>
          <NavigationMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
