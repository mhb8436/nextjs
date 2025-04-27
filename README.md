# React와 Next.js 학습 예제

이 저장소는 React와 Next.js의 기본 개념부터 고급 기능까지 단계별로 학습할 수 있는 예제들을 포함하고 있습니다.

## 프로젝트 생성 가이드

### React + TypeScript 프로젝트 생성 (Vite 사용)

새로운 React + TypeScript 프로젝트를 생성하려면 다음 명령어를 사용하세요:

```bash
# 기본 생성
npm create vite@latest my-app -- --template react-ts

# 생성 후 의존성 설치 및 실행
cd my-app
npm install
npm run dev
```

### Next.js + TypeScript 프로젝트 생성

새로운 Next.js + TypeScript 프로젝트를 생성하려면 다음 명령어를 사용하세요:

```bash
# App Router를 사용하는 Next.js 프로젝트 생성
npx create-next-app@latest my-app --typescript --tailwind --eslint

# 생성 후 실행
cd my-app
npm run dev
```

## 디렉토리 구조

- `01_react_basics`: React 기초 개념 (컴포넌트, JSX)
- `02_jsx_and_props`: JSX 문법과 Props 활용
- `03_useState`: useState 훅 활용
- `04_useEffect`: useEffect 훅과 생명주기
- `05_component_structure`: 컴포넌트 구조화와 설계
- `06_useRef`: useRef 훅 활용
- `07_useContext`: Context API와 상태 관리
- `08_useReducer`: useReducer를 통한 복잡한 상태 관리
- `09_custom_hook`: 사용자 정의 훅 만들기
- `10_nextjs_app_router_setup`: Next.js App Router 설정
- `11_nextjs_app_router_basic`: App Router 기본 기능
- `12_nextjs_app_router_nested`: 중첩 라우팅
- `13_nextjs_app_router_api`: API 라우트 활용
- `14_nextjs_app_router_fetching`: 데이터 페칭

## 실행 방법

각 예제 디렉토리에서:

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev   # Next.js 프로젝트
npm run start # React 프로젝트
```

## 학습 순서

1. React 기초 (01-09)
   - 컴포넌트와 JSX
   - Props와 상태 관리
   - Hooks 활용
   - 컴포넌트 설계

2. Next.js App Router (10-14)
   - 기본 설정
   - 라우팅
   - API 개발
   - 데이터 페칭

각 디렉토리의 예제는 실제 프로젝트에서 자주 사용되는 패턴과 베스트 프랙티스를 포함하고 있습니다.
