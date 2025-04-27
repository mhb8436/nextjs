import React from 'react';
import './styles.css';
import UserProfile from './components/UserProfile';
import ProductCard from './components/ProductCard';
import ConditionalRendering from './components/ConditionalRendering';
import ListRendering from './components/ListRendering';

const App: React.FC = () => {
  const user = {
    name: '김철수',
    age: 25,
    email: 'kim@example.com',
    imageUrl: 'https://via.placeholder.com/150'
  };

  const products = [
    {
      id: 1,
      name: '노트북',
      price: 1200000,
      description: '고성능 노트북',
      imageUrl: 'https://via.placeholder.com/200'
    },
    {
      id: 2,
      name: '스마트폰',
      price: 800000,
      description: '최신형 스마트폰',
      imageUrl: 'https://via.placeholder.com/200'
    }
  ];

  return (
    <div className="app">
      <h1>JSX와 Props 학습</h1>
      
      <section className="section">
        <h2>1. 기본적인 Props 전달</h2>
        <UserProfile
          name={user.name}
          age={user.age}
          email={user.email}
          imageUrl={user.imageUrl}
        />
      </section>

      <section className="section">
        <h2>2. 객체로 Props 전달</h2>
        <ProductCard {...products[0]} onBuy={() => alert('구매하기 클릭!')} />
      </section>

      <section className="section">
        <h2>3. 조건부 렌더링</h2>
        <ConditionalRendering
          isLoggedIn={true}
          username="김철수"
          notifications={3}
        />
      </section>

      <section className="section">
        <h2>4. 리스트 렌더링</h2>
        <ListRendering items={products} />
      </section>
    </div>
  );
};

export default App;
