import React from "react";
import styles from "./Section.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink as faLinkSolid } from "@fortawesome/free-solid-svg-icons";

const Section = (props) => {
  const buttonSideStyle = {
    backgroundImage: `url(${require(`../bgImages/${props.imageUrl}`)})`,
  };

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.textSide}>
          <h2>{props.title}</h2>
          {props.desc}
        </div>
        <div className={styles.buttonSide} style={buttonSideStyle}>
          <a href={props.gitlink} className={`${styles.projectButton} ${styles.button}`}>
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            <span>GitHub</span>
          </a>
          <a
            href={props.hostlink}
            className={`${styles.projectButton} ${styles.button}`}
            style={
              props.isWeb
                ? {}
                : { pointerEvents: "none", cursor: "default" }
            }
          >
            <FontAwesomeIcon icon={faLinkSolid} className={styles.icon} />
            <span>{props.isWeb ? "View" : "Not a Web app"}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section;
