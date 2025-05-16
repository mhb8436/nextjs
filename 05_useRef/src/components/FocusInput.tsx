import React, { useRef, useEffect, useState } from "react";

const FocusInput: React.FC = () => {
  // input 요소를 참조하기 위한 ref
  const inputRef = useRef<HTMLInputElement>(null);
  // 포커스 횟수를 저장하기 위한 ref
  const focusCount = useRef(0);

  // 컴포넌트가 마운트될 때 input에 포커스
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const [displayCount, setDisplayCount] = useState(0);

  const handleFocus = () => {
    // ref는 리렌더링을 발생시키지 않고 값을 저장
    focusCount.current += 1;
    // 화면 표시용 상태 업데이트
    setDisplayCount(focusCount.current);
  };

  const handleButtonClick = () => {
    // 버튼 클릭 시 input에 포커스
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="focus-input">
      <div className="input-group">
        <input
          ref={inputRef}
          type="text"
          placeholder="이 입력란은 자동으로 포커스됩니다"
          onFocus={handleFocus}
        />
        <button onClick={handleButtonClick}>입력란 포커스</button>
      </div>
      <div className="focus-count">포커스 횟수: {displayCount}회</div>
      <p className="help-text">
        입력란을 클릭하거나 버튼을 누를 때마다 포커스 횟수가 증가합니다. 이 값은
        리렌더링되어도 유지됩니다!
      </p>
    </div>
  );
};

export default FocusInput;
