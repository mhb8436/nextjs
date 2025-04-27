import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

const ShoppingCart: React.FC = () => {
  // 상품 목록 (실제로는 API에서 가져올 수 있습니다)
  const products: Product[] = [
    { id: 1, name: '노트북', price: 1200000 },
    { id: 2, name: '스마트폰', price: 800000 },
    { id: 3, name: '이어폰', price: 200000 },
    { id: 4, name: '마우스', price: 50000 }
  ];

  // 장바구니 상태 관리
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  // 할인 코드 상태
  const [discountCode, setDiscountCode] = useState('');
  const [discount, setDiscount] = useState(0);

  // 상품을 장바구니에 추가
  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // 이미 있는 상품이면 수량만 증가
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      // 새로운 상품이면 추가
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // 장바구니에서 상품 제거
  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // 수량 변경
  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // 할인 코드 적용
  const applyDiscountCode = () => {
    // 실제로는 API를 통해 할인 코드 검증
    if (discountCode === 'SAVE10') {
      setDiscount(0.1); // 10% 할인
    } else if (discountCode === 'SAVE20') {
      setDiscount(0.2); // 20% 할인
    } else {
      alert('유효하지 않은 할인 코드입니다.');
      setDiscount(0);
    }
  };

  // 총 금액 계산
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;

  return (
    <div className="shopping-cart">
      <div className="products">
        <h3>상품 목록</h3>
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-item">
              <span>{product.name}</span>
              <span>{product.price.toLocaleString()}원</span>
              <button onClick={() => addToCart(product)}>
                장바구니에 추가
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="cart">
        <h3>장바구니</h3>
        {cartItems.length === 0 ? (
          <p>장바구니가 비어있습니다.</p>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span>
                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <span>{(item.price * item.quantity).toLocaleString()}원</span>
                <button onClick={() => removeFromCart(item.id)}>삭제</button>
              </div>
            ))}

            <div className="discount-section">
              <input
                type="text"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                placeholder="할인 코드 입력"
              />
              <button onClick={applyDiscountCode}>적용</button>
            </div>

            <div className="cart-summary">
              <p>소계: {subtotal.toLocaleString()}원</p>
              {discount > 0 && (
                <p>할인: -{discountAmount.toLocaleString()}원</p>
              )}
              <p className="total">총계: {total.toLocaleString()}원</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
