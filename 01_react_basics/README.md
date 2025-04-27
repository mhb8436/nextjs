# React 기초 학습

이 프로젝트는 React의 기본 개념을 학습하기 위한 예제입니다.

## 프로젝트 개요
React의 기본 개념과 컴포넌트 작성 방법을 학습하는 예제 프로젝트입니다.

## 주요 학습 내용
- JSX 문법
- 컴포넌트 생성 및 사용
- Props 전달
- 이벤트 핸들링

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
├── components/       # 재사용 가능한 컴포넌트
│   ├── Button.tsx
│   └── Header.tsx
├── App.tsx          # 메인 애플리케이션 컴포넌트
└── main.tsx         # 앱 진입점
```

## 예제 코드
```tsx
// Button.tsx
interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};
```

## 학습 포인트
1. 컴포넌트 기반 개발
2. TypeScript와 React 통합
3. 이벤트 처리
4. Props를 통한 데이터 전달

## 프로젝트 생성 방법

```bash
# Vite CLI를 사용하여 React + TypeScript 프로젝트 생성
npm create vite@latest 01_react_basics -- --template react-ts

# 생성된 프로젝트로 이동
cd 01_react_basics

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 추가 학습 자료

- [React 공식 문서](https://react.dev/)
- [React TypeScript 가이드](https://react-typescript-cheatsheet.netlify.app/)
