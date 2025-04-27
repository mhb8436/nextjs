import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Next.js Form 예제
        </h1>
        <p className="text-gray-600 mb-8">
          Next.js와 React Hook Form을 사용한 폼 처리
        </p>

        <div className="space-y-4">
          <Link
            href="/tasks"
            className="block w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            작업 관리
          </Link>
        </div>

        <div className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold">주요 기능</h2>
          <ul className="text-left space-y-2 text-gray-600">
            <li>✓ Server Actions</li>
            <li>✓ React Hook Form</li>
            <li>✓ Zod 유효성 검사</li>
            <li>✓ React Query</li>
            <li>✓ Optimistic Updates</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
