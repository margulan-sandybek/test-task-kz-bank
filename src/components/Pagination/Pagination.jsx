import React from 'react';
import styles from './Pagination.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Pagination = ({ currentPage, totalPages, paginate }) => {
  return (
    <div className={styles.pagination}>
      <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
        <ArrowBackIosIcon className={styles.icon} />
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => paginate(page)}
          className={currentPage === page ? styles.active : ''}
        >
          {page}
        </button>
      ))}
      <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
        <ArrowForwardIosIcon className={styles.icon} />
      </button>
    </div>
  );
};

export default Pagination;