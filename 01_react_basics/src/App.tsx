import React, { Component } from 'react';
import type { ReactElement } from 'react';
import './styles.css';

// 기본적인 함수형 컴포넌트
function Welcome({ name }: { name: string }) {
  return <h2>안녕하세요, {name}님!</h2>;
}

// 클래스형 컴포넌트 예제
interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0
  };

  render() {
    return (
      <div className="counter">
        <h3>카운터: {this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          증가
        </button>
      </div>
    );
  }
}

// 메인 App 컴포넌트
function App(): ReactElement {
  return (
    <div className="app">
      <h1>React 기초 학습</h1>
      
      {/* 컴포넌트 재사용 */}
      <Welcome name="김철수" />
      <Welcome name="이영희" />
      
      {/* 클래스형 컴포넌트 사용 */}
      <Counter />
      
      {/* JSX와 자바스크립트 표현식 */}
      <div className="expression-example">
        <h3>JSX 내의 자바스크립트 표현식</h3>
        <p>1 + 1 = {1 + 1}</p>
        <p>현재 시간: {new Date().toLocaleTimeString()}</p>
        <p>{[1, 2, 3].map(num => (
          <span key={num} className="number">{num} </span>
        ))}</p>
      </div>
    </div>
  );
}

export default App;