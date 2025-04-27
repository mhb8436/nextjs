import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface ListRenderingProps {
  items: Product[];
}

const ListRendering: React.FC<ListRenderingProps> = ({ items }) => {
  return (
    <div className="list-rendering">
      {/* 기본적인 배열 매핑 */}
      <ul className="product-list">
        {items.map(item => (
          <li key={item.id} className="product-item">
            <img src={item.imageUrl} alt={item.name} className="product-image" />
            <div className="product-details">
              <h3>{item.name}</h3>
              <p>{new Intl.NumberFormat('ko-KR', {
                style: 'currency',
                currency: 'KRW'
              }).format(item.price)}</p>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* 조건부 렌더링과 함께 사용 */}
      {items.length === 0 ? (
        <p>표시할 상품이 없습니다.</p>
      ) : (
        <p>총 {items.length}개의 상품이 있습니다.</p>
      )}

      {/* 필터링과 함께 사용 */}
      <div className="expensive-products">
        <h4>고가 상품 목록 (100만원 이상)</h4>
        <ul>
          {items
            .filter(item => item.price >= 1000000)
            .map(item => (
              <li key={item.id}>{item.name} - {new Intl.NumberFormat('ko-KR', {
                style: 'currency',
                currency: 'KRW'
              }).format(item.price)}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ListRendering;
