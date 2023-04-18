import styles from "./BookGrid.module.scss";
import { ThreeDots } from "react-loader-spinner";
import { Book } from "../../services/book";
import BookCard from "../../components/BookCard/BookCard";
import { useEffect } from "react";
import { useState } from "react";
import SortNav from "../../components/SortNav/SortNav";

const BookGrid = ({
  data,
  error,
  isLoading,
  isError,
  handleSortTitle,
  handleSortAuthors,
  sortBy,
}: any) => {
  return (
    <div className={styles.BookGrid}>
      <nav className={styles.BookGrid_Sort}>
        <SortNav
          sortBy={sortBy}
          handleSortAuthors={handleSortAuthors}
          handleSortTitle={handleSortTitle}
        />
      </nav>
      <section className={styles.BookGrid_Books}>
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
          data
            .sort((a: Book, b: Book) => a[sortBy].localeCompare(b[sortBy]))
            .map((book: Book, id: number) => {
              return <BookCard data={book} key={id} />;
            })
        )}
      </section>
    </div>
  );
};

export default BookGrid;
