import { auth } from '@/lib/auth';

export const metadata = {
  title: '대시보드 | Next.js 인증',
  description: 'Next.js로 구현한 대시보드 페이지입니다.',
};

export default async function DashboardPage() {
  const session = await auth();
  
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">대시보드</h1>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600">
            안녕하세요, {session?.user?.name}님!
          </p>
          <p className="text-gray-600">
            이메일: {session?.user?.email}
          </p>
        </div>
      </div>
    </div>
  );
}
