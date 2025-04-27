import { Post, User, Comment } from '@/types';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${API_BASE_URL}/posts`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  return res.json();
}

export async function getPost(id: number): Promise<Post> {
  const res = await fetch(`${API_BASE_URL}/posts/${id}`);
  
  if (!res.ok) {
    throw new Error(`Failed to fetch post ${id}`);
  }
  
  return res.json();
}

export async function getUser(id: number): Promise<User> {
  const res = await fetch(`${API_BASE_URL}/users/${id}`);
  
  if (!res.ok) {
    throw new Error(`Failed to fetch user ${id}`);
  }
  
  return res.json();
}

export async function getPostComments(postId: number): Promise<Comment[]> {
  const res = await fetch(`${API_BASE_URL}/posts/${postId}/comments`);
  
  if (!res.ok) {
    throw new Error(`Failed to fetch comments for post ${postId}`);
  }
  
  return res.json();
}
