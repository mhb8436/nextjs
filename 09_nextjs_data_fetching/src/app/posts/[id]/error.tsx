'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h2 className="text-red-800 text-lg font-semibold mb-2">
          게시글을 불러오는 중 오류가 발생했습니다
        </h2>
        <p className="text-red-700 mb-4">{error.message}</p>
        <button
          onClick={reset}
          className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200 transition-colors"
        >
          다시 시도
        </button>
      </div>
    </div>
  );
}
