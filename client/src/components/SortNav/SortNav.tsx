import React from "react";
import styles from "./SortNav.module.scss";

const SortNav = ({ handleSortTitle, handleSortAuthors }: any) => {
  return (
    <div className={styles.SortNav}>
      <h3>Sort By:</h3>
      <h3 onClick={handleSortTitle}>Title</h3>
      <h3 onClick={handleSortAuthors}>Author</h3>
      <h3>Reset</h3>
    </div>
  );
};

export default SortNav;
