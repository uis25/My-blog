import styles from './Pagination.module.css';

const PAGE_SIZE = 10;

function Pagination({ page, totalCount, onPageChange }) {
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);
  if (totalPages <= 1) return null;

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.btn}
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        ← 이전
      </button>
      <span className={styles.info}>{page} / {totalPages}</span>
      <button
        className={styles.btn}
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        다음 →
      </button>
    </div>
  );
}

export default Pagination;