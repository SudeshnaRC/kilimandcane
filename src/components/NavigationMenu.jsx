import React from "react";
import { NavItems } from "../constants/NavItems";
import styles from "./Menu.module.css";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

function NavigationMenu() {
  const location = useLocation();

  function isCurrentView(navItem) {
    return "/" + navItem.toLowerCase() === location.pathname;
  }
  return (
    <div className={styles.navList}>
      {NavItems.map((item) => (
        <p key={item} className={isCurrentView(item) ? styles.currentNavItem : styles.navItem}>
          {item.toUpperCase()}
        </p>
      ))}
    </div>
  );
}

NavigationMenu.propTypes = {
  currentView: PropTypes.string,
};

export default NavigationMenu;
