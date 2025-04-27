# useReducer Hook 학습

## 프로젝트 개요
React의 useReducer Hook을 활용한 복잡한 상태 관리를 학습하는 프로젝트입니다.

## 주요 학습 내용
- useReducer Hook 기본 사용법
- Reducer 패턴 이해
- Action과 State 관리
- 복잡한 상태 관리

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
├── reducers/
│   ├── todoReducer.ts   # Todo 상태 관리
│   └── cartReducer.ts   # 장바구니 상태 관리
├── components/
│   ├── TodoList.tsx     # Todo 리스트 컴포넌트
│   └── ShoppingCart.tsx # 장바구니 컴포넌트
├── App.tsx
└── main.tsx
```

## 예제 코드
```tsx
// reducers/todoReducer.ts
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'REMOVE_TODO'; payload: number };

export const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};
```

## 학습 포인트
1. Reducer 패턴의 이해
2. Action과 State 관계
3. TypeScript와 useReducer 활용
4. 복잡한 상태 관리 패턴

## 추가 학습 자료

- [React useReducer 문서](https://react.dev/reference/react/useReducer)
- [React 상태 관리 가이드](https://react.dev/learn/extracting-state-logic-into-a-reducer)
- [TypeScript와 React Hooks](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks/)
