import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // 기본적인 useEffect 사용
  useEffect(() => {
    let intervalId: number;

    // 타이머가 실행 중일 때만 인터벌 설정
    if (isRunning) {
      intervalId = window.setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }

    // 클린업 함수: 컴포넌트가 언마운트되거나 의존성이 변경될 때 실행
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]); // isRunning이 변경될 때만 effect 실행

  // 컴포넌트가 처음 마운트될 때만 실행
  useEffect(() => {
    console.log('Timer 컴포넌트가 마운트되었습니다.');

    // 컴포넌트가 언마운트될 때 실행
    return () => {
      console.log('Timer 컴포넌트가 언마운트되었습니다.');
    };
  }, []); // 빈 의존성 배열

  // count가 변경될 때마다 실행
  useEffect(() => {
    document.title = `${count}초 경과`;
  }, [count]);

  const handleReset = () => {
    setCount(0);
    setIsRunning(false);
  };

  return (
    <div className="timer">
      <div className="timer-display">
        <h3>경과 시간: {count}초</h3>
      </div>
      <div className="timer-controls">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? '일시정지' : '시작'}
        </button>
        <button onClick={handleReset}>리셋</button>
      </div>
    </div>
  );
};

export default Timer;
