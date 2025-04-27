import React, { useReducer } from 'react';
import { counterReducer, initialState } from '../reducers/counterReducer';

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="counter">
      <h2>카운터</h2>
      <div className="counter-display">
        <span className="count">{state.count}</span>
      </div>

      <div className="counter-controls">
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      </div>

      <div className="step-control">
        <label>
          증감 단위:
          <select
            value={state.step}
            onChange={(e) =>
              dispatch({ type: 'SET_STEP', payload: Number(e.target.value) })
            }
          >
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="100">100</option>
          </select>
        </label>
      </div>

      <div className="counter-actions">
        <button onClick={() => dispatch({ type: 'RESET' })}>초기화</button>
        <button
          onClick={() => dispatch({ type: 'UNDO' })}
          disabled={state.history.length === 0}
        >
          실행 취소
        </button>
      </div>

      <div className="counter-history">
        <h3>기록</h3>
        <ul>
          {state.history.map((count, index) => (
            <li key={index}>
              {index + 1}번째: {count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Counter;
