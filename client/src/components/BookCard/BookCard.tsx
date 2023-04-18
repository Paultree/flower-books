import React from "react";
import styles from "./BookCard.module.scss";
import { useNavigate } from "react-router-dom";
import { Book } from "../../services/book";

const BookCard = ({ data }: any) => {
  const navigate = useNavigate();

  const toInfo: () => void = () => {
    navigate(`/${data.id}`);
  };

  return (
    <div className={styles.BookCard} onClick={toInfo}>
      <h2>{data.title}</h2>
      <h4>{data.authors}</h4>
      <h5>{data.publishedDate}</h5>
    </div>
  );
};

export default BookCard;
