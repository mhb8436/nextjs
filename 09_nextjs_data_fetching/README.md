# Next.js 데이터 페칭

## 프로젝트 개요
Next.js의 다양한 데이터 페칭 방법과 캐싱 전략을 학습하는 프로젝트입니다.

## 주요 학습 내용
- Server Components에서 데이터 페칭
- Client Components에서 데이터 페칭
- 정적/동적 데이터 페칭
- 캐싱 전략

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
│   ├── posts/
│   │   ├── page.tsx      # 정적 페칭 예제
│   │   └── [id]/        # 동적 페칭 예제
│   └── api/
│       └── posts/       # API 라우트
├── components/
│   ├── PostList.tsx    # 서버 컴포넌트
│   └── PostForm.tsx    # 클라이언트 컴포넌트
└── lib/
    └── api.ts         # API 클라이언트
```

## 예제 코드
```tsx
// app/posts/page.tsx
async function getPosts() {
  const res = await fetch('https://api.example.com/posts', {
    next: { revalidate: 3600 } // 1시간마다 재검증
  });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>게시물 목록</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## 학습 포인트
1. 서버/클라이언트 컴포넌트 차이
2. 다양한 데이터 페칭 방법
3. 캐싱과 재검증 전략
4. 에러 처리와 로딩 상태
