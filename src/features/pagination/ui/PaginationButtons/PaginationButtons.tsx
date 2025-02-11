import { useTheme } from '@/app/providers/ThemeProvider';

import styles from './styles.module.css';
import { PaginationProps } from '../../model/types';

function PaginationButtons({
  totalPages,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
  currentPage,
}: PaginationProps) {
  const { isDark } = useTheme();
  return (
    <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
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

export default PaginationButtons;
