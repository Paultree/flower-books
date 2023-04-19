import styles from "./BookGrid.module.scss";
import { ThreeDots } from "react-loader-spinner";
import { Book } from "../../services/book";
import BookCard from "../../components/BookCard/BookCard";
import SortNav from "../../components/SortNav/SortNav";
import { useState } from "react";

const BookGrid = ({ data, error, isLoading, isError }: any) => {
  const [sortBy, setSortBy] = useState<string>("title");

  const handleSortTitle: () => void = () => {
    setSortBy("title");
  };

  const handleSortAuthors: () => void = () => {
    setSortBy("authors");
  };

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
          <div data-testid="loader">
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="rgba(255, 255, 255, 0.87)"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              visible={true}
            />
          </div>
        ) : isError ? (
          <div data-testid="error">Error! {error}</div>
        ) : (
          data
            .sort((a: any, b: any) => a[sortBy].localeCompare(b[sortBy]))
            .map((book: Book, id: number) => {
              return <BookCard data={book} key={id} />;
            })
        )}
      </section>
    </div>
  );
};

export default BookGrid;
