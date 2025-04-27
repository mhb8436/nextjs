import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
  title: '로그인 | Next.js 인증',
  description: 'Next.js로 구현한 로그인 페이지입니다.',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <LoginForm />
    </div>
  );
}
