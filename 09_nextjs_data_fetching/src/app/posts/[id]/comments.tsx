import { getPostComments } from '@/lib/api';

interface Props {
  postId: number;
}

export default async function Comments({ postId }: Props) {
  // 스트리밍을 위해 별도의 컴포넌트로 분리
  const comments = await getPostComments(postId);

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="border rounded-lg p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-medium">{comment.name}</h3>
            <span className="text-sm text-gray-500">{comment.email}</span>
          </div>
          <p className="text-gray-600">{comment.body}</p>
        </div>
      ))}
    </div>
  );
}
