import React from "react";
import styles from "./BookCard.module.scss";

const BookCard = ({ data }: any) => {
  return (
    <div className={styles.BookCard}>
      <h2>{data.title}</h2>
      <h4>{data.authors}</h4>
      <h5>{data.publishedDate}</h5>
    </div>
  );
};

export default BookCard;
