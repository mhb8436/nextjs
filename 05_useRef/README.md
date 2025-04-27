# useRef Hook 학습

## 프로젝트 개요

React의 useRef Hook을 활용한 DOM 조작과 값 유지를 학습하는 프로젝트입니다.

## 주요 학습 내용

- useRef Hook 기본 사용법
- DOM 요소 접근
- 이전 값 유지
- 포커스 관리

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
│   ├── FocusInput.tsx   # 포커스 관리 예제
│   ├── StopWatch.tsx    # 값 유지 예제
│   └── VideoPlayer.tsx  # DOM 조작 예제
├── App.tsx
└── main.tsx
```

## 예제 코드

```tsx
// FocusInput.tsx
import { useRef, useEffect } from "react";

export const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 컴포넌트 마운트 시 자동 포커스
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="자동 포커스 입력란" />
      <button onClick={() => inputRef.current?.focus()}>포커스</button>
    </div>
  );
};
```

## 학습 포인트

1. useRef의 다양한 활용 사례
2. DOM 조작과 값 유지의 차이
3. TypeScript와 useRef 활용
4. 렌더링 없는 값 관리

## 추가 학습 자료

- [React useRef 문서](https://react.dev/reference/react/useRef)
- [React DOM 요소 참조 가이드](https://react.dev/learn/manipulating-the-dom-with-refs)
- [TypeScript와 React Hooks](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks/)
