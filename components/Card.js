import React from 'react';
import styles from './Card.module.css'; // Adjust the path as necessary

const Card = ({data}) => {
  return (
    <>
      <div className={styles.card}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  );
};

export default Card;
