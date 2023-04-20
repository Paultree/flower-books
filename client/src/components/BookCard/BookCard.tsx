import styles from './BookCard.module.scss';
import { useNavigate } from 'react-router-dom';
import { BookCardProp } from '../../services/interface';

const BookCard = ({ data }: BookCardProp) => {
  const navigate = useNavigate();

  const toInfo: () => void = () => {
    navigate(`${data.id}`);
  };

  return (
    <tr data-testid="card" className={styles.BookCard} onClick={toInfo}>
      <td>{data.title}</td>
      <td>{data.authors}</td>
      <td>{data.publishedDate}</td>
    </tr>
  );
};

export default BookCard;
