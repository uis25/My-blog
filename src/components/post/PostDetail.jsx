import styles from './PostDetail.module.css';

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('ko-KR', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

function PostDetail({ post }) {
  const isUpdated = post.updated_at && post.updated_at !== post.created_at;

  return (
    <article className={styles.wrapper}>
      {post.thumbnail && (
        <img className={styles.thumbnail} src={post.thumbnail} alt={post.title} />
      )}
      <div className={styles.header}>
        <span className={styles.tag}>#{post.tag}</span>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <time>작성일 {formatDate(post.created_at)}</time>
          {isUpdated && <time className={styles.updated}>수정일 {formatDate(post.updated_at)}</time>}
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.content}>
        {post.content}
      </div>
    </article>
  );
}

export default PostDetail;