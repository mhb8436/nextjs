import React from "react";
import "./styles.css";
import Timer from "./components/Timer";
import WindowSize from "./components/WindowSize";
import DataFetching from "./components/DataFetching";
import ScrollPosition from "./components/ScrollPosition";

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>useEffect 훅 학습</h1>

      <section className="section">
        <h2>1. 기본적인 useEffect</h2>
        <Timer />
      </section>

      <section className="section">
        <h2>2. 이벤트 리스너 관리</h2>
        <WindowSize />
      </section>

      <section className="section">
        <h2>3. 데이터 페칭</h2>
        <DataFetching />
      </section>

      <section className="section">
        <h2>4. 스크롤 위치 추적</h2>
        <ScrollPosition />
      </section>
    </div>
  );
};

export default App;
