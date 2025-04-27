# useEffect 훅 학습

이 프로젝트는 React의 useEffect 훅을 사용한 사이드 이펙트 관리 방법을 학습하기 위한 예제입니다.

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

## 학습 내용

- useEffect 훅의 기본 사용법
- 의존성 배열의 활용
- 클린업 함수
- 마운트/언마운트 처리
- API 호출과 데이터 페칭

## 주요 파일 구조

- `src/App.tsx`: 메인 애플리케이션 컴포넌트
- `src/components/`: 예제 컴포넌트들
- `src/main.tsx`: 애플리케이션 진입점

## 실행 방법

개발 서버가 실행되면 기본적으로 http://localhost:5173 에서 애플리케이션을 확인할 수 있습니다.

## 추가 학습 자료

- [React useEffect 문서](https://react.dev/reference/react/useEffect)
- [React 사이드 이펙트 가이드](https://react.dev/learn/synchronizing-with-effects)
- [TypeScript와 React Hooks](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks/)
