import { useQuery } from 'react-query';
import { getAllBooks } from './services/service';
import styles from './App.module.scss';
import { Book } from './services/type';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import BookGrid from './containers/BookGrid/BookGrid';
import BookInfo from './containers/BookInfo/BookInfo';

function App() {
  const { data, error, isLoading, isError } = useQuery<Book[], Error>('books', getAllBooks);

  const navigate = useNavigate();

  const toHome = (): void => {
    navigate('/flower-books');
  };

  return (
    <div className={styles.App}>
      <header className={styles.App_Title}>
        <h1 onClick={toHome}>B o o q u e t</h1>
        <p>A list of flower-related books.</p>
      </header>
      <section>
        <Routes>
          <Route
            path="/flower-books"
            element={
              <BookGrid
                data={data as Book[]}
                error={error}
                isLoading={isLoading}
                isError={isError}
              />
            }
          />
          <Route path="flower-books/:id" element={<BookInfo />} />
        </Routes>
      </section>
      <footer className={styles.App_Footer}>Booquet. Built by Paul Pham.</footer>
    </div>
  );
}

export default App;
