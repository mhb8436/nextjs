import React, { useState } from "react";
import "./styles.css";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'todo' | 'counter'>('todo');

  return (
    <div className="app">
      <header>
        <h1>useReducer 훅 예제</h1>
        <div className="tabs">
          <button
            className={activeTab === 'todo' ? 'active' : ''}
            onClick={() => setActiveTab('todo')}
          >
            할 일 목록
          </button>
          <button
            className={activeTab === 'counter' ? 'active' : ''}
            onClick={() => setActiveTab('counter')}
          >
            카운터
          </button>
        </div>
      </header>

      <main>
        <section className="example-section">
          <h2>useReducer로 상태 관리하기</h2>
          <p className="description">
            이 예제는 useReducer 훅을 사용하여 복잡한 상태 로직을 관리하는 방법을 보여줍니다:
          </p>
          <ul>
            <li>할 일 목록: 항목 추가, 삭제, 수정, 필터링</li>
            <li>카운터: 증감, 실행 취소, 기록 관리</li>
          </ul>
        </section>

        {activeTab === 'todo' ? <TodoList /> : <Counter />}
      </main>
    </div>
  );
};

export default App;
