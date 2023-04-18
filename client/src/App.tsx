import { useQuery } from "react-query";
import { getAllBooks } from "./services/service";
import styles from "./App.module.scss";
import { Book } from "./services/book";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookGrid from "./containers/BookGrid/BookGrid";
import BookInfo from "./containers/BookInfo/BookInfo";
import { useState, useEffect } from "react";

function App() {
  const { data, error, isLoading, isError } = useQuery<Book[], Error>(
    "books",
    getAllBooks
  );

  const [sortBy, setSortBy] = useState<string>("title");

  const handleSortTitle: () => void = () => {
    setSortBy("title");
  };

  const handleSortAuthors: () => void = () => {
    setSortBy("authors");
  };

  return (
    <div className={styles.App}>
      <header className={styles.App_Title}>
        <h1>B o o q u e t</h1>
        <p>A list of flower-related books...</p>
      </header>
      <section>
        <Routes>
          <Route
            path="/"
            element={
              <BookGrid
                data={data}
                error={error}
                isLoading={isLoading}
                isError={isError}
                handleSortAuthors={handleSortAuthors}
                handleSortTitle={handleSortTitle}
                sortBy={sortBy}
              />
            }
          />
          <Route path="/:id" element={<BookInfo data={data} />} />
        </Routes>
      </section>
      <footer className={styles.App_Footer}>
        Booquet. Built by Paul Pham.
      </footer>
    </div>
  );
}

export default App;
