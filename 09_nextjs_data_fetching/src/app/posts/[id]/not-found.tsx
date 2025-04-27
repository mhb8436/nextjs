import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">
          게시글을 찾을 수 없습니다
        </h2>
        <p className="text-gray-600 mb-8">
          요청하신 게시글이 존재하지 않거나 삭제되었을 수 있습니다.
        </p>
        <Link
          href="/posts"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          게시글 목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
