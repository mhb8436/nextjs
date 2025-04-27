import React, { useState, useRef, useEffect } from 'react';

const PreviousValue: React.FC = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  // 이전 값들을 저장하기 위한 ref
  const prevCountRef = useRef<number>();
  const prevNameRef = useRef<string>();

  // count나 name이 변경될 때마다 이전 값을 저장
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  useEffect(() => {
    prevNameRef.current = name;
  }, [name]);

  const handleIncrement = () => {
    setCount(c => c + 1);
  };

  const handleDecrement = () => {
    setCount(c => c - 1);
  };

  // 값이 증가했는지 감소했는지 확인
  const getCountChange = () => {
    if (prevCountRef.current === undefined) return '';
    if (count > prevCountRef.current) return '(증가)';
    if (count < prevCountRef.current) return '(감소)';
    return '(변화 없음)';
  };

  // 이름이 변경되었는지 확인
  const getNameChange = () => {
    if (prevNameRef.current === undefined) return '';
    if (name === prevNameRef.current) return '(변화 없음)';
    return '(변경됨)';
  };

  return (
    <div className="previous-value">
      <div className="counter">
        <h3>숫자 변경</h3>
        <p>
          현재 값: {count} {getCountChange()}
        </p>
        <p>이전 값: {prevCountRef.current ?? '없음'}</p>
        <div className="controls">
          <button onClick={handleDecrement}>감소</button>
          <button onClick={handleIncrement}>증가</button>
        </div>
      </div>

      <div className="name-input">
        <h3>이름 변경</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력하세요"
        />
        <p>
          현재 이름: {name || '(없음)'} {getNameChange()}
        </p>
        <p>이전 이름: {prevNameRef.current ?? '없음'}</p>
      </div>

      <div className="help-text">
        <p>
          useRef를 사용하여 이전 값을 저장하고 있습니다.
          값이 변경될 때마다 이전 값과 비교하여 변화를 표시합니다.
        </p>
      </div>
    </div>
  );
};

export default PreviousValue;
