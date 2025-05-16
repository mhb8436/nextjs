# Next.js 기초

## 프로젝트 개요

Next.js의 기본 기능과 App Router를 학습하는 프로젝트입니다.

## 주요 학습 내용

- App Router 구조
- 페이지 라우팅
- 레이아웃과 템플릿
- 정적 및 동적 라우팅

## 실행 방법

```bash
npx create-next-app@latest my-next-app --typescript --app

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 홈페이지
│   ├── about/          # 정적 라우팅
│   └── posts/          # 동적 라우팅
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
└── styles/
    └── globals.css
```

## 예제 코드

```tsx
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/posts">Posts</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer> 2025 My Next.js App</footer>
      </body>
    </html>
  );
}
```

## 학습 포인트

1. App Router 구조 이해
2. 레이아웃과 페이지 관계
3. 정적/동적 라우팅 차이
4. 컴포넌트 구조화

## 추가 학습 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Next.js App Router 가이드](https://nextjs.org/docs/app/building-your-application/routing)
- [Next.js TypeScript 가이드](https://nextjs.org/docs/basic-features/typescript)
