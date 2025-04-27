import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const DataFetching: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [postId, setPostId] = useState(1);

  // 데이터 페칭
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        
        if (!response.ok) {
          throw new Error('데이터를 불러오는데 실패했습니다.');
        }
        
        const data = await response.json();
        setPosts(prev => [...prev, data]);
      } catch (err) {
        setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]); // postId가 변경될 때마다 실행

  // 모든 포스트 삭제
  const handleClearPosts = () => {
    setPosts([]);
  };

  // 다음 포스트 불러오기
  const handleLoadMore = () => {
    setPostId(prev => prev + 1);
  };

  return (
    <div className="data-fetching">
      <div className="controls">
        <button onClick={handleLoadMore}>다음 포스트 불러오기</button>
        <button onClick={handleClearPosts}>모두 지우기</button>
      </div>

      {loading && <p className="loading">로딩 중...</p>}
      {error && <p className="error">{error}</p>}
      
      <div className="posts">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetching;
