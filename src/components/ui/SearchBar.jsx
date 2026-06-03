import { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(value.trim());
  }

  function handleClear() {
    setValue('');
    onSearch('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="제목으로 검색..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {value && (
        <button type="button" className={styles.clearBtn} onClick={handleClear}>✕</button>
      )}
      <button type="submit" className={styles.searchBtn}>검색</button>
    </form>
  );
}

export default SearchBar;