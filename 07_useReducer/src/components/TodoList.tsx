import React, { useReducer, useState } from 'react';
import { todoReducer, initialState, Todo } from '../reducers/todoReducer';

const TodoList: React.FC = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch({ type: 'ADD_TODO', payload: newTodo.trim() });
      setNewTodo('');
    }
  };

  const startEditing = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId && editText.trim()) {
      dispatch({
        type: 'EDIT_TODO',
        payload: { id: editingId, text: editText.trim() }
      });
      setEditingId(null);
      setEditText('');
    }
  };

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'active') return !todo.completed;
    if (state.filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="todo-list">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">추가</button>
      </form>

      <div className="todo-filters">
        <button
          className={state.filter === 'all' ? 'active' : ''}
          onClick={() => dispatch({ type: 'FILTER_TODOS', payload: 'all' })}
        >
          전체
        </button>
        <button
          className={state.filter === 'active' ? 'active' : ''}
          onClick={() => dispatch({ type: 'FILTER_TODOS', payload: 'active' })}
        >
          진행 중
        </button>
        <button
          className={state.filter === 'completed' ? 'active' : ''}
          onClick={() => dispatch({ type: 'FILTER_TODOS', payload: 'completed' })}
        >
          완료
        </button>
        <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>
          완료된 항목 삭제
        </button>
      </div>

      <ul className="todo-items">
        {filteredTodos.map(todo => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''} ${
              todo.important ? 'important' : ''
            }`}
          >
            {editingId === todo.id ? (
              <form onSubmit={handleEdit} className="edit-form">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button type="submit">저장</button>
                <button type="button" onClick={() => setEditingId(null)}>
                  취소
                </button>
              </form>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() =>
                    dispatch({ type: 'TOGGLE_TODO', payload: todo.id })
                  }
                />
                <span
                  className="todo-text"
                  onDoubleClick={() => startEditing(todo)}
                >
                  {todo.text}
                </span>
                <div className="todo-actions">
                  <button
                    onClick={() =>
                      dispatch({ type: 'TOGGLE_IMPORTANT', payload: todo.id })
                    }
                  >
                    {todo.important ? '★' : '☆'}
                  </button>
                  <button
                    onClick={() =>
                      dispatch({ type: 'DELETE_TODO', payload: todo.id })
                    }
                  >
                    ×
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      <div className="todo-stats">
        <p>전체: {state.todos.length}개</p>
        <p>완료: {state.todos.filter(todo => todo.completed).length}개</p>
        <p>미완료: {state.todos.filter(todo => !todo.completed).length}개</p>
      </div>
    </div>
  );
};

export default TodoList;
