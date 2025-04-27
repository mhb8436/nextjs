import Link from 'next/link';
import { getPosts } from '@/lib/api';

export const metadata = {
  title: '게시글 목록 | Next.js 데이터 페칭',
  description: 'Next.js의 데이터 페칭 방법을 배워봅시다.',
};

export default async function PostsPage() {
  // 서버 컴포넌트에서 데이터 페칭
  const posts = await getPosts();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">게시글 목록</h1>
      
      <div className="space-y-4">
        {posts.map((post) => (
          <article
            key={post.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">
                {post.title}
              </h2>
              <p className="text-gray-600 line-clamp-2">{post.body}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
