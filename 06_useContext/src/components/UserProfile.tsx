import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { useNotification } from '../contexts/NotificationContext';

const UserProfile: React.FC = () => {
  const { user, login, updateProfile } = useUser();
  const { addNotification } = useNotification();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      login(name, email);
      addNotification('로그인 성공!', 'success');
    } else {
      addNotification('이름과 이메일을 입력해주세요.', 'error');
    }
  };

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      updateProfile(name, email);
      addNotification('프로필이 업데이트되었습니다.', 'success');
    } else {
      addNotification('이름과 이메일을 입력해주세요.', 'error');
    }
  };

  if (!user) {
    return (
      <div className="user-profile">
        <h2>로그인</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">로그인</button>
        </form>
      </div>
    );
  }

  return (
    <div className="user-profile">
      <h2>프로필 수정</h2>
      <form onSubmit={handleUpdateProfile}>
        <div className="form-group">
          <input
            type="text"
            placeholder="새 이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="새 이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">프로필 업데이트</button>
      </form>
    </div>
  );
};

export default UserProfile;
