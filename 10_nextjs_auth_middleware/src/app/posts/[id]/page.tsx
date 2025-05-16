'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
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

export default function PostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<Post | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState({ title: '', content: '' });
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    fetchPost();
  }, [params.id]);

  const fetchPost = async () => {
    const response = await fetch(`/api/posts/${params.id}`);
    if (response.ok) {
      const data = await response.json();
      setPost(data);
      setEditedPost({ title: data.title, content: data.content });
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch(`/api/posts/${params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedPost),
    });

    if (response.ok) {
      setIsEditing(false);
      fetchPost();
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    const response = await fetch(`/api/posts/${params.id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      router.push('/posts');
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {!isEditing ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-4">{post.content}</p>
          <p className="text-sm text-gray-500 mb-4">
            By {post.author.name || post.author.email}
          </p>
          {session?.user && (
            <div className="space-x-4">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={editedPost.title}
              onChange={(e) => setEditedPost({ ...editedPost, title: e.target.value })}
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
              value={editedPost.content}
              onChange={(e) => setEditedPost({ ...editedPost, content: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              rows={8}
              required
            />
          </div>
          <div className="space-x-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
