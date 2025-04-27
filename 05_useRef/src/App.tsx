import React from "react";
import "./styles.css";
import FocusInput from "./components/FocusInput";
import VideoPlayer from "./components/VideoPlayer";
import StopWatch from "./components/StopWatch";
import PreviousValue from "./components/PreviousValue";
const App: React.FC = () => {
  return (
    <div className="app">
      <h1>useRef 훅 학습</h1>

      <section className="section">
        <h2>1. DOM 요소 접근</h2>
        <FocusInput />
      </section>

      <section className="section">
        <h2>2. 비디오 플레이어 제어</h2>
        <VideoPlayer />
      </section>

      <section className="section">
        <h2>3. 스톱워치</h2>
        <StopWatch />
      </section>

      <section className="section">
        <h2>4. 이전 값 저장</h2>
        <PreviousValue />
      </section>
    </div>
  );
};

export default App;
