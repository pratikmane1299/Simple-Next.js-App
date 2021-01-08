import React from "react";
import styles from '../styles/Card.module.css'

const Card = ({ title, content }) => {
  return (
    <a href="https://nextjs.org/docs" className={styles.card}>
      <h3>{title} &rarr;</h3>
      <p>{content}</p>
    </a>
  );
};

export default Card;
