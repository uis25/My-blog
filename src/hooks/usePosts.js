import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const PAGE_SIZE = 10;

export function usePosts({ page = 1, searchQuery = '', selectedTag = '' }) {
  const [posts, setPosts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      setError(null);

      const from = (page - 1) * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      let query = supabase
        .from('posts')
        .select('id, title, tag, excerpt, thumbnail, created_at, updated_at', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(from, to);

      if (searchQuery) {
        query = query.ilike('title', `%${searchQuery}%`);
      }
      if (selectedTag) {
        query = query.eq('tag', selectedTag);
      }

      const { data, count, error } = await query;

      if (error) {
        setError(error.message);
        setPosts([]);
      } else {
        setPosts(data);
        setTotalCount(count ?? 0);
      }
      setLoading(false);
    }

    fetchPosts();
  }, [page, searchQuery, selectedTag]);

  return { posts, totalCount, loading, error };
}