import { PaginationProps } from '../../interfaces';
import styles from './styles.module.css';

function Pagination({
  totalPages,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
  currentPage,
}: PaginationProps) {
  return (
    <div className={styles.pagination}>
      <button className={styles.arrow} disabled={currentPage <= 1} onClick={handlePrevPage}>
        {'<'}
      </button>

      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={styles.pageNumber}
              disabled={index + 1 === currentPage}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <button
        className={styles.arrow}
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
      >
        {'>'}
      </button>
    </div>
  );
}

export default Pagination;
