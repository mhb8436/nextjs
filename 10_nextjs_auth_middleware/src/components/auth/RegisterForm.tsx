'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const registerSchema = z
  .object({
    name: z.string().min(2, '이름은 2글자 이상이어야 합니다.'),
    email: z.string().email('유효한 이메일을 입력해주세요.'),
    password: z.string().min(6, '비밀번호는 6자 이상이어야 합니다.'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error);
        return;
      }

      router.push('/login?registered=true');
    } catch (error) {
      setError('회원가입 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="max-w-md w-full space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold">회원가입</h2>
        <p className="mt-2 text-gray-600">
          이미 계정이 있으신가요?{' '}
          <a href="/login" className="text-blue-500 hover:text-blue-600">
            로그인
          </a>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {error && (
          <div className="bg-red-50 text-red-500 p-4 rounded-lg text-center">
            {error}
          </div>
        )}

        <Input
          label="이름"
          {...register('name')}
          error={errors.name?.message}
        />

        <Input
          label="이메일"
          type="email"
          {...register('email')}
          error={errors.email?.message}
        />

        <Input
          label="비밀번호"
          type="password"
          {...register('password')}
          error={errors.password?.message}
        />

        <Input
          label="비밀번호 확인"
          type="password"
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />

        <Button
          type="submit"
          className="w-full"
          isLoading={isSubmitting}
        >
          회원가입
        </Button>
      </form>
    </div>
  );
}
