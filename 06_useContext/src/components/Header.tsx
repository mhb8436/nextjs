import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useUser();

  return (
    <header className={`header ${isDark ? 'dark' : 'light'}`}>
      <div className="header-content">
        <h1>Context API 예제</h1>
        <div className="header-controls">
          <button onClick={toggleTheme}>
            {isDark ? '라이트 모드' : '다크 모드'}
          </button>
          {user ? (
            <div className="user-info">
              <span>안녕하세요, {user.name}님!</span>
              <button onClick={logout}>로그아웃</button>
            </div>
          ) : (
            <span>로그인이 필요합니다</span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
