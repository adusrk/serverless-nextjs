import React from 'react';
import styles from './Card.module.css'; // Adjust the path as necessary

const Card = ({data}) => {
  
  return (
    <>
    <div className={styles.card}>
      <div className={styles.cardContent}>
    {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Welcome to the server!"}
  </div>
      </div>
    </>
  );
};

export default Card;
