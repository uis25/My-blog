import { useNavigate } from 'react-router-dom';
import styles from './PostCard.module.css';

const FALLBACK_IMG = 'https://placehold.co/600x200/edf2f7/a0aec0?text=No+Image';

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('ko-KR', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

function PostCard({ post }) {
  const navigate = useNavigate();

  return (
    <article className={styles.card} onClick={() => navigate(`/post/${post.id}`)}>
      <img
        className={styles.thumbnail}
        src={post.thumbnail || FALLBACK_IMG}
        alt={post.title}
        onError={e => { e.currentTarget.src = FALLBACK_IMG; }}
      />
      <div className={styles.body}>
        <span className={styles.tag}>#{post.tag}</span>
        <h2 className={styles.title}>{post.title}</h2>
        {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
        <time className={styles.date}>{formatDate(post.created_at)}</time>
      </div>
    </article>
  );
}

export default PostCard;