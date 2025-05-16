import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Next.js 인증 예제</h1>
        <p className="text-gray-600 mb-8">
          Next.js와 NextAuth.js를 사용한 인증 시스템 구현
        </p>

        <div className="space-y-4">
          <Link
            href="/login"
            className="block w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            로그인
          </Link>
          <Link
            href="/register"
            className="block w-full bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            회원가입
          </Link>
        </div>

        <div className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold">주요 기능</h2>
          <ul className="text-left space-y-2 text-gray-600">
            <li>✓ 이메일/비밀번호 로그인</li>
            <li>✓ Google 소셜 로그인</li>
            <li>✓ 회원가입</li>
            <li>✓ 보호된 라우트</li>
            <li>✓ 미들웨어 인증</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
