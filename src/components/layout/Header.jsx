import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>🍀사주 직접 해석하기🍀</Link>
        <Link to="/write" className={styles.writeBtn}>+ 새 글 작성</Link>
      </div>
    </header>
  );
}

export default Header;