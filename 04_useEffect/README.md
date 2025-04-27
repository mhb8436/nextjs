# useEffect Hook 학습

## 프로젝트 개요
React의 useEffect Hook을 활용한 생명주기 관리와 사이드 이펙트 처리를 학습하는 프로젝트입니다.

## 주요 학습 내용
- useEffect Hook 기본 사용법
- 의존성 배열 활용
- Clean-up 함수 처리
- API 호출 및 데이터 페칭

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
│   ├── DataFetcher.tsx  # API 호출 예제
│   ├── WindowSize.tsx   # 이벤트 리스너 예제
│   └── Timer.tsx       # 타이머 예제
├── App.tsx
└── main.tsx
```

## 예제 코드
```tsx
// WindowSize.tsx
import { useState, useEffect } from 'react';

export const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>
    </div>
  );
};
```

## 학습 포인트
1. 컴포넌트 생명주기 관리
2. 사이드 이펙트 처리
3. Clean-up 함수 활용
4. 의존성 배열의 중요성

## 프로젝트 생성 방법

```bash
# Vite CLI를 사용하여 React + TypeScript 프로젝트 생성
npm create vite@latest 04_useEffect -- --template react-ts

# 생성된 프로젝트로 이동
cd 04_useEffect

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 설치 방법

```bash
# 프로젝트 클론
git clone [repository-url]
cd 04_useEffect

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 추가 학습 자료

- [React useEffect 문서](https://react.dev/reference/react/useEffect)
- [React 사이드 이펙트 가이드](https://react.dev/learn/synchronizing-with-effects)
- [TypeScript와 React Hooks](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks/)
