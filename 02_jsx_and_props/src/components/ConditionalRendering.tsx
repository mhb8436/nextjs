import React from 'react';

interface ConditionalRenderingProps {
  isLoggedIn: boolean;
  username: string;
  notifications: number;
}

const ConditionalRendering: React.FC<ConditionalRenderingProps> = ({
  isLoggedIn,
  username,
  notifications
}) => {
  return (
    <div className="conditional-rendering">
      {/* 조건부 렌더링 - if문 형태 */}
      {isLoggedIn ? (
        <div className="user-status">
          <p>환영합니다, {username}님!</p>
          {/* 조건부 렌더링 - &&연산자 사용 */}
          {notifications > 0 && (
            <span className="notification-badge">
              새로운 알림 {notifications}개
            </span>
          )}
        </div>
      ) : (
        <p>로그인이 필요합니다.</p>
      )}

      {/* 여러 조건 처리 */}
      <div className="notification-status">
        {notifications === 0 ? (
          <p>새로운 알림이 없습니다.</p>
        ) : notifications < 3 ? (
          <p>몇 개의 새로운 알림이 있습니다.</p>
        ) : (
          <p>많은 알림이 있습니다!</p>
        )}
      </div>
    </div>
  );
};

export default ConditionalRendering;
