import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">
          Next.js 데이터 페칭 학습
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Next.js의 다양한 데이터 페칭 방법을 실습을 통해 배워봅시다.
        </p>
        <Link
          href="/posts"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          게시글 목록 보기
        </Link>
      </section>

      <section className="grid gap-8 md:grid-cols-2 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">서버 컴포넌트</h2>
          <p className="text-gray-600 mb-4">
            React Server Components를 사용하여 서버 사이드에서 데이터를
            가져옵니다.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>서버에서 직접 데이터 페칭</li>
            <li>클라이언트로 전송되는 JavaScript 감소</li>
            <li>자동 정적 최적화</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">스트리밍</h2>
          <p className="text-gray-600 mb-4">
            Streaming과 Suspense를 활용하여 점진적으로 콘텐츠를 로드합니다.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>로딩 상태 처리</li>
            <li>부분적 프리렌더링</li>
            <li>병렬 데이터 페칭</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
