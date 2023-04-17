import { useEffect, useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { getAllBooks } from "./services/service";
import styles from "./App.module.scss";
import BookCard from "./components/BookCard/BookCard";
import { ThreeDots } from "react-loader-spinner";

function App() {
  const { data, error, isLoading, isError }: any = useQuery(
    "books",
    getAllBooks
  );

  return (
    <div className={styles.App}>
      <header className={styles.App_Title}>
        <h1>B o o q u e t</h1>
        <p>A library of flower-related books...</p>
      </header>
      <nav></nav>
      <section className={styles.App_Grid}>
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
          data.map((book: any, id: number) => {
            return <BookCard data={book} key={id} />;
          })
        )}
      </section>
      <footer className={styles.App_Footer}>
        Booquet. Built by Paul Pham.
      </footer>
    </div>
  );
}

export default App;
