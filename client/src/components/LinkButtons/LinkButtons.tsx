import React from 'react';
import styles from './LinkButtons.module.scss';

const LinkButtons = ({ previewLink, buyLink }: any) => {
  return (
    <div className={styles.LinkButtons}>
      <button disabled={!previewLink}>
        <a href={previewLink} target="_blank">
          {previewLink ? 'Preview' : 'Unavailable'}
        </a>
      </button>
      <button disabled={!buyLink}>
        <a href={buyLink} target="_blank">
          {buyLink ? 'Buy' : 'Unavailable'}
        </a>
      </button>
    </div>
  );
};

export default LinkButtons;
