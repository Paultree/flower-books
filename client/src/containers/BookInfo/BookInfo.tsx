import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Book } from '../../services/book';
import styles from './BookInfo.module.scss';
import { ThreeDots } from 'react-loader-spinner';

const BookInfo = ({ data }: any) => {
  const navigate = useNavigate();

  const toHome: () => void = () => {
    navigate('/flower-books');
  };

  const { id } = useParams();

  const [book, setBook]: any = useState({});

  useEffect(() => {
    const bookInfo = data?.find((book: Book) => book.id == id);
    setBook(bookInfo);
  }, [data, id]);

  return book ? (
    <div data-testid="info" className={styles.BookInfo}>
      <span onClick={toHome}>&lt; Back</span>
      <section className={styles.BookInfo_Info}>
        <section>
          <h1 className={styles.BookInfo_Info_Title}>{book.title?.toUpperCase()}</h1>
          <h3 className={styles.BookInfo_Info_Authors}>
            <em>{book.authors}</em>
          </h3>
          <p className={styles.BookInfo_Info_Desc}>{book.description}</p>
        </section>
        <section className={styles.BookInfo_Image}>
          <img src={book.image} />
        </section>
      </section>
    </div>
  ) : (
    <div data-testid="loader" className={styles.BookInfo_Info}>
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
  );
};

export default BookInfo;
