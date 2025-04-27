# Next.js 인증과 미들웨어

## 프로젝트 개요
Next.js의 인증 기능과 미들웨어를 학습하는 프로젝트입니다.

## 주요 학습 내용
- Next.js 미들웨어 구현
- NextAuth.js를 통한 인증
- 권한 관리
- 보안 정책

## 실행 방법
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 프로젝트 구조
```
src/
├── app/
│   ├── api/
│   │   ├── auth/       # 인증 API 라우트
│   │   └── protected/  # 보호된 API 라우트
│   ├── dashboard/    # 보호된 페이지
│   └── login/        # 로그인 페이지
├── middleware.ts    # 미들웨어 정의
├── lib/
│   ├── auth.ts       # 인증 관련 유틸
│   └── session.ts    # 세션 관리
└── types/
    └── next-auth.d.ts # 인증 타입 정의
```

## 예제 코드
```tsx
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session');

  // 보호된 경로 처리
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // API 경로 보호
  if (request.nextUrl.pathname.startsWith('/api/protected')) {
    if (!session) {
      return new NextResponse(
        JSON.stringify({ error: 'authentication required' }),
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/protected/:path*'],
};
```

## 학습 포인트
1. 미들웨어의 역할과 활용
2. 인증 방식과 보안
3. 세션 관리
4. 권한 부여 전략
