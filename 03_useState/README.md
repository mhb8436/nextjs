# useState Hook 학습

## 프로젝트 개요
React의 useState Hook을 활용한 상태 관리를 학습하는 프로젝트입니다.

## 주요 학습 내용
- useState Hook 사용법
- 상태 갱신 방법
- 객체 상태 관리
- 배열 상태 관리

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
│   ├── Counter.tsx     # 단순 상태 관리 예제
│   ├── TodoList.tsx    # 배열 상태 관리 예제
│   └── UserForm.tsx    # 객체 상태 관리 예제
├── App.tsx
└── main.tsx
```

## 예제 코드
```tsx
// Counter.tsx
import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
```

## 학습 포인트
1. 상태 갱신의 비동기성
2. 이전 상태를 기반로 한 상태 갱신
3. 객체와 배열의 불변성 유지
4. TypeScript와 함께 사용하는 useState

## 프로젝트 생성 방법

```bash
# Vite CLI를 사용하여 React + TypeScript 프로젝트 생성
npm create vite@latest 03_useState -- --template react-ts

# 생성된 프로젝트로 이동
cd 03_useState

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 설치 방법

```bash
# 프로젝트 클론
git clone [repository-url]
cd 03_useState

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 추가 학습 자료

- [React useState 문서](https://react.dev/reference/react/useState)
- [React 상태 관리 가이드](https://react.dev/learn/state-a-components-memory)
- [TypeScript와 React Hooks](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks/)
