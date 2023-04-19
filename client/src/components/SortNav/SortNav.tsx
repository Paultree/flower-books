import styles from "./SortNav.module.scss";

const SortNav = ({ handleSortTitle, handleSortAuthors, sortBy }: any) => {
  const activeClass = [styles.SortNav_Sort, styles.Active];

  return (
    <div className={styles.SortNav}>
      <h3>Sort By:</h3>
      <h3
        className={
          sortBy == "title" ? activeClass.join(" ") : styles.SortNav_Sort
        }
        onClick={handleSortTitle}
      >
        Title
      </h3>
      <h3
        className={
          sortBy == "authors" ? activeClass.join(" ") : styles.SortNav_Sort
        }
        onClick={handleSortAuthors}
      >
        Author
      </h3>
    </div>
  );
};

export default SortNav;
