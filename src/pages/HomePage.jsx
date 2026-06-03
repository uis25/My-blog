import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { usePosts } from '../hooks/usePosts';
import SearchBar from '../components/ui/SearchBar';
import TagFilter from '../components/ui/TagFilter';
import Pagination from '../components/ui/Pagination';
import PostList from '../components/post/PostList';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import styles from './HomePage.module.css';

function HomePage() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [tags, setTags] = useState([]);

  const { posts, totalCount, loading, error } = usePosts({ page, searchQuery, selectedTag });

  // 태그 목록 별도 조회 (최초 1회)
  useEffect(() => {
    async function fetchTags() {
      const { data } = await supabase.from('posts').select('tag');
      if (data) {
        const unique = [...new Set(data.map(p => p.tag).filter(Boolean))];
        setTags(unique);
      }
    }
    fetchTags();
  }, []);

  function handleSearch(query) {
    setSearchQuery(query);
    setPage(1);
  }

  function handleTagSelect(tag) {
    setSelectedTag(tag);
    setPage(1);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <SearchBar onSearch={handleSearch} />
        <TagFilter tags={tags} selectedTag={selectedTag} onSelect={handleTagSelect} />
      </div>

      {error && <p className={styles.error}>데이터를 불러오지 못했습니다: {error}</p>}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <PostList posts={posts} />
          <Pagination page={page} totalCount={totalCount} onPageChange={setPage} />
        </>
      )}
    </div>
  );
}

export default HomePage;