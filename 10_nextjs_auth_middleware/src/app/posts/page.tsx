'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

interface Post {
  id: string;
  title: string;
  content: string;
  published: boolean;
  author: {
    name: string | null;
    email: string | null;
  };
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { data: session } = useSession();
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch('/api/posts');
    const data = await response.json();
    setPosts(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost),
    });

    if (response.ok) {
      setNewPost({ title: '', content: '' });
      fetchPosts();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      
      {session?.user && (
        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              id="content"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Create Post
          </button>
        </form>
      )}

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/posts/${post.id}`} className="text-indigo-600 hover:text-indigo-800">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-2">{post.content}</p>
            <p className="text-sm text-gray-500">
              By {post.author.name || post.author.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
