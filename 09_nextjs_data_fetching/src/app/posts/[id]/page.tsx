import { Suspense } from 'react';
import { getPost, getUser, getPostComments } from '@/lib/api';
import { notFound } from 'next/navigation';
import Comments from './comments';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const post = await getPost(parseInt(params.id));
  
  return {
    title: `${post.title} | Next.js 데이터 페칭`,
    description: post.body.substring(0, 160),
  };
}

export default async function PostPage({ params }: Props) {
  const id = parseInt(params.id);
  
  // 병렬 데이터 페칭
  const [post, user] = await Promise.all([
    getPost(id).catch(() => null),
    getUser(id).catch(() => null),
  ]);

  if (!post || !user) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <article className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600 mb-8">
          작성자: {user.name} ({user.email})
        </div>
        <p className="text-gray-800 leading-relaxed whitespace-pre-line">
          {post.body}
        </p>
      </article>

      <div className="border-t pt-8">
        <h2 className="text-2xl font-semibold mb-4">댓글</h2>
        <Suspense
          fallback={
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="border rounded-lg p-4">
                  <div className="h-4 w-1/3 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-full bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          }
        >
          <Comments postId={id} />
        </Suspense>
      </div>
    </div>
  );
}
