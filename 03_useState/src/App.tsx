import React, { useState } from 'react';
import './styles.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import UserForm from './components/UserForm';
import ShoppingCart from './components/ShoppingCart';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>useState 훅 학습</h1>
      
      <section className="section">
        <h2>1. 기본적인 숫자 상태 관리</h2>
        <Counter />
      </section>

      <section className="section">
        <h2>2. 객체 상태 관리</h2>
        <UserForm />
      </section>

      <section className="section">
        <h2>3. 배열 상태 관리</h2>
        <TodoList />
      </section>

      <section className="section">
        <h2>4. 복잡한 상태 관리</h2>
        <ShoppingCart />
      </section>
    </div>
  );
};

export default App;
