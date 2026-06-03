import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export function usePost(id) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    async function fetchPost() {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        setError(error.message);
      } else {
        setPost(data);
      }
      setLoading(false);
    }

    fetchPost();
  }, [id]);

  return { post, loading, error };
}