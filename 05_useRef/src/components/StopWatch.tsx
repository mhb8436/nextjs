import React, { useState, useRef } from 'react';

const StopWatch: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  // interval ID를 저장하기 위한 ref
  const intervalRef = useRef<number | null>(null);
  // 시작 시간을 저장하기 위한 ref
  const startTimeRef = useRef<number>(0);

  const handleStart = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - time;
    intervalRef.current = window.setInterval(() => {
      setTime(Date.now() - startTimeRef.current);
    }, 10);
  };

  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  };

  const handleReset = () => {
    handleStop();
    setTime(0);
  };

  const handleLap = () => {
    if (isRunning) {
      const lapTime = formatTime(time);
      const newLap = document.createElement('div');
      newLap.textContent = `랩 타임: ${lapTime}`;
      if (lapsRef.current) {
        lapsRef.current.prepend(newLap);
      }
    }
  };

  // 랩 타임을 표시할 div를 참조하기 위한 ref
  const lapsRef = useRef<HTMLDivElement>(null);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="stopwatch">
      <div className="display">
        <span className="time">{formatTime(time)}</span>
      </div>

      <div className="controls">
        {!isRunning ? (
          <button onClick={handleStart}>시작</button>
        ) : (
          <button onClick={handleStop}>정지</button>
        )}
        <button onClick={handleReset}>리셋</button>
        <button onClick={handleLap} disabled={!isRunning}>
          랩
        </button>
      </div>

      <div ref={lapsRef} className="laps">
        {/* 랩 타임이 여기에 추가됩니다 */}
      </div>
    </div>
  );
};

export default StopWatch;
