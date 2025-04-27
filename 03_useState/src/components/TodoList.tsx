import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  // 배열 상태 관리
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  // 새로운 할 일 추가
  const addTodo = () => {
    if (input.trim() === '') return;

    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: Date.now(),
        text: input.trim(),
        completed: false
      }
    ]);
    setInput('');
  };

  // 할 일 삭제
  const removeTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // 할 일 완료 상태 토글
  const toggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 모든 할 일 삭제
  const clearTodos = () => {
    setTodos([]);
  };

  // 완료된 할 일만 삭제
  const clearCompleted = () => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
  };

  return (
    <div className="todo-list">
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="새로운 할 일을 입력하세요"
        />
        <button onClick={addTodo}>추가</button>
      </div>

      <ul className="todos">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <div className="todo-actions">
          <button onClick={clearCompleted}>완료된 항목 삭제</button>
          <button onClick={clearTodos}>전체 삭제</button>
        </div>
      )}

      <div className="todo-stats">
        <p>전체 할 일: {todos.length}개</p>
        <p>완료된 할 일: {todos.filter(todo => todo.completed).length}개</p>
      </div>
    </div>
  );
};

export default TodoList;
