import styles from './TagFilter.module.css';

function TagFilter({ tags, selectedTag, onSelect }) {
  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.tag} ${!selectedTag ? styles.active : ''}`}
        onClick={() => onSelect('')}
      >
        전체
      </button>
      {tags.map(tag => (
        <button
          key={tag}
          className={`${styles.tag} ${selectedTag === tag ? styles.active : ''}`}
          onClick={() => onSelect(tag)}
        >
          #{tag}
        </button>
      ))}
    </div>
  );
}

export default TagFilter;