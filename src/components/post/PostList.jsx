import PostCard from './PostCard';
import styles from './PostList.module.css';

function PostList({ posts }) {
  if (posts.length === 0) {
    return (
      <div className={styles.empty}>
        <p>게시글이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;