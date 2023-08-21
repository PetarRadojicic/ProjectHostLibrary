import React from "react";
import styles from "./Footer.module.css"; // Import the CSS module

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        2023 Copyright. All Rights Reserved.
      </div>
      <div className={styles.footerRight}>
        <span>
          Github -
          <a href="https://github.com/Steropor"> https://github.com/Steropor</a>
          <p>Email - petar@radojicic.co</p>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
