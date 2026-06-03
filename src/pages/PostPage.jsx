import { useParams, useNavigate } from 'react-router-dom';
import { usePost } from '../hooks/usePost';
import PostDetail from '../components/post/PostDetail';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import styles from './PostPage.module.css';

function PostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { post, loading, error } = usePost(id);

  if (loading) return <LoadingSpinner />;
  if (error || !post) return (
    <div className={styles.error}>
      <p>게시글을 찾을 수 없습니다.</p>
      <button onClick={() => navigate('/')}>목록으로 돌아가기</button>
    </div>
  );

  return (
    <div>
      <button className={styles.back} onClick={() => navigate(-1)}>← 뒤로가기</button>
      <PostDetail post={post} />
    </div>
  );
}

export default PostPage;