import React from 'react';
import styles from './Card.module.css'; // Adjust the path as necessary

const Card = ({data}) => {
  const cardStyle = {
    height: data ? 'var(--card-height)' : '200px' // Example: '200px' when no data
  };

  return (
    <>
    <div className={styles.card} style={cardStyle}>
      <div className={styles.cardContent}>
    {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Welcome to the server!"}
  </div>
      </div>
    </>
  );
};

export default Card;
