# Next.js Form 처리 예제

이 프로젝트는 Next.js와 React Hook Form을 사용하여 폼 처리와 상태 관리를 구현한 예제입니다.

## 기술 스택

- Next.js 14 (App Router)
- TypeScript
- React Hook Form
- Zod
- TanStack Query (React Query)
- Prisma
- SQLite
- Tailwind CSS

## 설치 및 실행

1. 프로젝트 생성

```bash
npx create-next-app@latest . --typescript --tailwind --eslint
```

2. 의존성 설치

```bash
npm install @tanstack/react-query @tanstack/react-query-devtools
npm install react-hook-form @hookform/resolvers zod
npm install tailwind-merge clsx
npm install prisma @prisma/client
```

3. Prisma 초기화

```bash
npx prisma init
```

4. 데이터베이스 스키마 생성 및 마이그레이션

```bash
npx prisma generate
npx prisma migrate dev --name init
```

5. 개발 서버 실행

```bash
npm run dev
```

## 프로젝트 구조

```
src/
├── app/
│   ├── api/
│   │   └── tasks/
│   │       ├── route.ts        # 작업 목록 및 생성 API
│   │       └── [id]/
│   │           └── route.ts    # 작업 조회/수정/삭제 API
│   ├── tasks/
│   │   ├── page.tsx         # 작업 목록 페이지
│   │   ├── new/
│   │   │   └── page.tsx     # 새 작업 생성 페이지
│   │   └── [id]/
│   │       └── edit/
│   │           └── page.tsx # 작업 수정 페이지
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── tasks/
│       └── TaskForm.tsx    # 작업 폼 컴포넌트
├── lib/
│   └── prisma.ts         # Prisma 클라이언트
└── types/
    └── index.ts          # 타입 정의
```

## 기능

- 작업 목록 보기
- 새 작업 추가
- 작업 수정
- 작업 삭제
- 폼 유효성 검사
- 서버 상태 관리

## 학습 포인트

1. Next.js App Router

   - 라우팅
   - 서버/클라이언트 컴포넌트
   - API 라우트

2. 폼 처리

   - React Hook Form
   - Zod 스키마 검증

3. 상태 관리

   - React Query
   - 서버 상태 관리
   - 데이터 캐싱

4. 데이터베이스
   - Prisma ORM
   - 스키마 정의
   - CRUD 작업
