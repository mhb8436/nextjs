import React, { useState } from 'react';

const Counter: React.FC = () => {
  // 기본적인 숫자 상태
  const [count, setCount] = useState(0);
  
  // 증가/감소 단위를 위한 상태
  const [step, setStep] = useState(1);

  // 이전 상태를 기반으로 업데이트
  const increment = () => {
    setCount(prevCount => prevCount + step);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - step);
  };

  // 여러 번 상태 업데이트
  const incrementMultiple = () => {
    // 이렇게 하면 의도한 대로 동작하지 않습니다
    // setCount(count + step);
    // setCount(count + step);
    // setCount(count + step);

    // 이렇게 해야 의도한 대로 동작합니다
    setCount(prev => prev + step);
    setCount(prev => prev + step);
    setCount(prev => prev + step);
  };

  return (
    <div className="counter">
      <div className="counter-display">
        <h3>현재 값: {count}</h3>
      </div>
      
      <div className="counter-controls">
        <button onClick={decrement}>감소</button>
        <button onClick={increment}>증가</button>
        <button onClick={incrementMultiple}>3배 증가</button>
      </div>

      <div className="step-controls">
        <label>
          증가/감소 단위:
          <select 
            value={step} 
            onChange={(e) => setStep(Number(e.target.value))}
          >
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="100">100</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Counter;
