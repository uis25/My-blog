import { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import styles from './PostForm.module.css';

const INITIAL = { title: '', content: '', tag: '', excerpt: '', thumbnail: '' };

function PostForm() {
  const [form, setForm] = useState(INITIAL);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) {
      setError('제목과 내용은 필수입니다.');
      return;
    }

    setLoading(true);
    setError(null);

    const { error } = await supabase.from('posts').insert([{
      title: form.title.trim(),
      content: form.content.trim(),
      tag: form.tag.trim() || '기타',
      excerpt: form.excerpt.trim(),
      thumbnail: form.thumbnail.trim(),
    }]);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.heading}>새 글 작성</h1>

      {error && <p className={styles.error}>{error}</p>}

      <label className={styles.label}>
        제목 <span className={styles.required}>*</span>
        <input
          className={styles.input}
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="글 제목을 입력하세요"
          maxLength={100}
        />
      </label>

      <label className={styles.label}>
        태그
        <input
          className={styles.input}
          name="tag"
          value={form.tag}
          onChange={handleChange}
          placeholder="예) React, 일상, 프로젝트"
        />
      </label>

      <label className={styles.label}>
        썸네일 URL
        <input
          className={styles.input}
          name="thumbnail"
          value={form.thumbnail}
          onChange={handleChange}
          placeholder="https://..."
        />
      </label>

      <label className={styles.label}>
        요약 (excerpt)
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          name="excerpt"
          value={form.excerpt}
          onChange={handleChange}
          placeholder="목록에 보여줄 2~3줄 요약을 입력하세요"
          rows={3}
        />
      </label>

      <label className={styles.label}>
        본문 <span className={styles.required}>*</span>
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="본문 내용을 입력하세요"
          rows={14}
        />
      </label>

      <button className={styles.submit} type="submit" disabled={loading}>
        {loading ? '등록 중...' : '글 등록하기'}
      </button>
    </form>
  );
}

export default PostForm;