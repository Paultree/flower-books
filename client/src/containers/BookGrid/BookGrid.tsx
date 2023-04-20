import styles from './BookGrid.module.scss';
import { ThreeDots } from 'react-loader-spinner';
import { Book } from '../../services/type';
import BookCard from '../../components/BookCard/BookCard';
import SortNav from '../../components/SortNav/SortNav';
import { useState } from 'react';
import { BookGridProp } from '../../services/interface';

const BookGrid = ({ data, error, isLoading, isError }: BookGridProp) => {
  const [sortBy, setSortBy] = useState<string>('title');

  const handleSortTitle: () => void = () => {
    setSortBy('title');
  };

  const handleSortAuthors: () => void = () => {
    setSortBy('authors');
  };

  const sortedData: Book[] = data?.sort((a: any, b: any) => a[sortBy].localeCompare(b[sortBy]));

  return (
    <div className={styles.BookGrid}>
      <nav className={styles.BookGrid_Sort}>
        <SortNav
          sortBy={sortBy}
          handleSortAuthors={handleSortAuthors}
          handleSortTitle={handleSortTitle}
        />
      </nav>
      <table className={styles.BookGrid_Table}>
        <tr className={styles.BookGrid_Table_Header}>
          <th>Title</th>
          <th>Author</th>
          <th>Date Published</th>
        </tr>
        {isLoading ? (
          <div data-testid="loader" className={styles.BookGrid_Loader}>
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
          <div data-testid="error">Error! {error?.message}</div>
        ) : (
          sortedData.map((book: Book) => {
            return <BookCard data={book} key={book.id} />;
          })
        )}
      </table>
    </div>
  );
};

export default BookGrid;
