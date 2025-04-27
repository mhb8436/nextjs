# JSX와 Props 학습

이 프로젝트는 React의 JSX 문법과 Props 사용법을 학습하기 위한 예제입니다.

## 프로젝트 개요
JSX 문법과 Props를 활용한 컴포넌트 개발을 학습하는 프로젝트입니다.

## 주요 학습 내용
- JSX 문법 사용
- Props 전달 및 타입 정의
- 조건부 렌더링
- 리스트 렌더링

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
├── components/
│   ├── UserCard.tsx    # Props 예제
│   ├── UserList.tsx    # 리스트 렌더링 예제
│   └── Conditional.tsx # 조건부 렌더링 예제
├── App.tsx
└── main.tsx
```

## 예제 코드
```tsx
// UserCard.tsx
interface UserCardProps {
  name: string;
  email: string;
  isAdmin?: boolean;
}

export const UserCard = ({ name, email, isAdmin = false }: UserCardProps) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{email}</p>
      {isAdmin && <span className="admin-badge">Admin</span>}
    </div>
  );
};
```

## 학습 포인트
1. Props를 통한 컴포넌트 재사용
2. TypeScript로 Props 타입 정의
3. 조건부 렌더링 패턴
4. 리스트 렌더링과 key 사용

## 프로젝트 생성 방법

```bash
# Vite CLI를 사용하여 React + TypeScript 프로젝트 생성
npm create vite@latest 02_jsx_and_props -- --template react-ts

# 생성된 프로젝트로 이동
cd 02_jsx_and_props

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 설치 방법

```bash
# 프로젝트 클론
git clone [repository-url]
cd 02_jsx_and_props

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 추가 학습 자료

- [React JSX 문서](https://react.dev/learn/writing-markup-with-jsx)
- [React Props 문서](https://react.dev/learn/passing-props-to-a-component)
- [TypeScript와 React](https://react-typescript-cheatsheet.netlify.app/)
