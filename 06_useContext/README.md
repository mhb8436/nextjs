# useContext Hook 학습

## 프로젝트 개요

React의 useContext Hook을 활용한 전역 상태 관리를 학습하는 프로젝트입니다.

## 주요 학습 내용

- Context API 기본 사용법
- useContext Hook 활용
- 전역 상태 관리
- 테마 관리 구현

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
├── contexts/
│   ├── ThemeContext.tsx  # 테마 관리 컨텍스트
│   └── UserContext.tsx   # 유저 관리 컨텍스트
├── components/
│   ├── ThemeToggle.tsx   # 테마 전환 컴포넌트
│   └── UserProfile.tsx   # 유저 정보 컴포넌트
├── App.tsx
└── main.tsx
```

## 예제 코드

```tsx
// contexts/ThemeContext.tsx
import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
```

## 학습 포인트

1. Context API의 활용 사례
2. Provider 패턴 이해
3. TypeScript와 Context 활용
4. 컨텍스트 구조화

## 추가 학습 자료

- [React Context 문서](https://react.dev/reference/react/useContext)
- [React Context 가이드](https://react.dev/learn/passing-data-deeply-with-context)
- [TypeScript와 React Context](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/)
