import React from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  onBuy: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  description,
  imageUrl,
  onBuy
}) => {
  const formattedPrice = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW'
  }).format(price);

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-info">
        <h3>{name}</h3>
        <p className="price">{formattedPrice}</p>
        <p className="description">{description}</p>
        <button onClick={onBuy} className="buy-button">
          구매하기
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
