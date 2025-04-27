import React, { useState, useEffect } from 'react';

const ScrollPosition: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 스크롤 방향 감지
      setIsScrollingUp(currentScrollY < lastScrollY);
      
      // 현재 스크롤 위치 업데이트
      setScrollY(currentScrollY);
      setLastScrollY(currentScrollY);
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 클린업 함수
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // lastScrollY가 변경될 때마다 effect 실행

  // 스크롤 진행률 계산
  const calculateScrollProgress = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const maxScroll = documentHeight - windowHeight;
    return Math.round((scrollY / maxScroll) * 100) || 0;
  };

  return (
    <div className="scroll-position">
      <div className="scroll-info">
        <p>현재 스크롤 위치: {scrollY}px</p>
        <p>스크롤 방향: {isScrollingUp ? '위로' : '아래로'}</p>
        <p>스크롤 진행률: {calculateScrollProgress()}%</p>
      </div>
      
      {/* 스크롤을 위한 더미 컨텐츠 */}
      <div className="scroll-content">
        <p>아래로 스크롤해보세요!</p>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="scroll-section">
            <h3>섹션 {index + 1}</h3>
            <p>
              이 섹션은 스크롤 동작을 테스트하기 위한 더미 컨텐츠입니다.
              스크롤하면서 상단의 스크롤 정보가 어떻게 변하는지 확인해보세요.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollPosition;
