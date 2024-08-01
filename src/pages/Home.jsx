import React from "react";
import galleryWall from "../assets/images/gallery_wall.jpg";
import styles from "./Home.module.css";

function Home() {
  return (
    <main>
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
        <div>
            <h1 className={styles.vintage}>VINTAGE</h1>
            <h1 className={styles.interiorDesign}>INTERIOR DESIGN</h1>
          </div>
        <img src={galleryWall} className={styles.homeImage} alt="" />
        
        </div>
        <div>
        <p className={styles.overlayText}>
            {`YOUR DREAM VINTAGE INTERIOR IS JUST A CLICK AWAY.\nLET'S CREATE A SPACE THAT WHISPERS HISTORY AND BEAUTY`}
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;
