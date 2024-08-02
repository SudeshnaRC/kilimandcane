import React from "react";
import {
  ABOUT,
  BLOG,
  CONTACT,
  HOME,
  NavItems,
  SHOP,
} from "../constants/NavItems";
import styles from "./Menu.module.css";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

function NavigationMenu() {
  const location = useLocation();
  const navigate = useNavigate();

  function isCurrentView(navItem) {
    return "/" + navItem.toLowerCase() === location.pathname;
  }

  const handleNavigation = (navigateTo) => {
    const path = (() => {
      switch (navigateTo) {
        case HOME:
          return "/home";
        case ABOUT:
          return "/about";
        case BLOG:
          return "/blog";
        case SHOP:
          return "/shop";
        case CONTACT:
          return "/contact";

        default:
          return location.pathname;
      }
    })();

    navigate(path);
  };
  return (
    <div className={styles.navList}>
      {NavItems.map((item) => (
        <p
          onClick={() => {
            handleNavigation(item);
          }}
          key={item}
          className={
            isCurrentView(item) ? styles.currentNavItem : styles.navItem
          }
        >
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
