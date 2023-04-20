import styles from './BookCard.module.scss';
import { useNavigate } from 'react-router-dom';
import { BookCardProp } from '../../services/interface';

const BookCard = ({ data }: BookCardProp) => {
  const navigate = useNavigate();

  const toInfo: () => void = () => {
    navigate(`${data.id}`);
  };

  return (
    <div data-testid="card" className={styles.BookCard} onClick={toInfo}>
      <h2>{data.title}</h2>
      <h2>{data.authors}</h2>
      <h2>{data.publishedDate}</h2>
    </div>
  );
};

export default BookCard;
