import React from "react";
import styles from "./BookGrid.module.scss";
import { ThreeDots } from "react-loader-spinner";
import { Book } from "../../services/book";
import BookCard from "../../components/BookCard/BookCard";

const BookGrid = ({ data, error, isLoading, isError }: any) => {
  return (
    <div className={styles.BookGrid}>
      {isLoading ? (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="rgba(255, 255, 255, 0.87)"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />
      ) : isError ? (
        `Error: ${error.message}`
      ) : (
        data.map((book: Book, id: number) => {
          return <BookCard data={book} key={id} />;
        })
      )}
    </div>
  );
};

export default BookGrid;
