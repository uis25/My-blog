import styles from './LoadingSpinner.module.css';

function LoadingSpinner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner} />
      <p className={styles.text}>불러오는 중...</p>
    </div>
  );
}

export default LoadingSpinner;