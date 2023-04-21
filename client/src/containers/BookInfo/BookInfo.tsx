import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styles from './BookInfo.module.scss';
import { ThreeDots } from 'react-loader-spinner';
import { getBook } from '../../services/service';

const BookInfo = () => {
  const navigate = useNavigate();

  const toHome: () => void = () => {
    navigate('/flower-books');
  };

  const { id } = useParams();

  const [book, setBook]: any = useState({});

  useEffect(() => {
    const wrapper = async () => {
      const book = await getBook(id as string);
      setBook(book);
    };
    wrapper();
  }, []);

  return book ? (
    <div className={styles.BookInfo}>
      <span onClick={toHome}>&lt; Back</span>
      <section className={styles.BookInfo_Info}>
        <section>
          <h1 className={styles.BookInfo_Info_Title}>{book.title?.toUpperCase()}</h1>
          <h3 className={styles.BookInfo_Info_Authors}>
            <em>{book.authors}</em>
          </h3>
          <p className={styles.BookInfo_Info_Desc}>{book.description}</p>
          <div className={styles.BookInfo_Info_Buttons}>
            <button disabled={!book.previewLink}>
              <a href={book.previewLink} target="_blank">
                {book.previewLink ? 'Free Preview' : 'No Preview'}
              </a>
            </button>
            <button disabled={!book.storeLink}>
              <a href={book.storeLink} target="_blank">
                {book.storeLink ? 'Buy' : 'Sold Out'}
              </a>
            </button>
          </div>
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
        color="black"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
};

export default BookInfo;
