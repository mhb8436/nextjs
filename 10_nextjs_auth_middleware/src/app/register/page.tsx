import RegisterForm from '@/components/auth/RegisterForm';

export const metadata = {
  title: '회원가입 | Next.js 인증',
  description: 'Next.js로 구현한 회원가입 페이지입니다.',
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <RegisterForm />
    </div>
  );
}
