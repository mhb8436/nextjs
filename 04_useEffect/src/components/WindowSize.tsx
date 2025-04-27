import React, { useState, useEffect } from 'react';

interface WindowDimensions {
  width: number;
  height: number;
}

const WindowSize: React.FC = () => {
  const [windowSize, setWindowSize] = useState<WindowDimensions>({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // 이벤트 리스너 관리
  useEffect(() => {
    // 리사이즈 이벤트 핸들러
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    // 클린업 함수에서 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 빈 의존성 배열: 컴포넌트가 마운트될 때만 실행

  // 화면 크기에 따른 반응형 메시지
  const getResponsiveMessage = () => {
    if (windowSize.width < 768) {
      return '모바일 화면';
    } else if (windowSize.width < 1024) {
      return '태블릿 화면';
    } else {
      return '데스크톱 화면';
    }
  };

  return (
    <div className="window-size">
      <div className="size-info">
        <p>현재 창 크기:</p>
        <p>너비: {windowSize.width}px</p>
        <p>높이: {windowSize.height}px</p>
        <p className="responsive-message">{getResponsiveMessage()}</p>
      </div>
      <div className="instruction">
        <p>브라우저 창의 크기를 조절해보세요!</p>
      </div>
    </div>
  );
};

export default WindowSize;
