import React, { useState } from 'react';

interface UserData {
  username: string;
  email: string;
  age: string;
  notifications: boolean;
}

const UserForm: React.FC = () => {
  // 객체 상태 관리
  const [userData, setUserData] = useState<UserData>({
    username: '',
    email: '',
    age: '',
    notifications: false
  });

  // 상태 업데이트 함수
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    setUserData(prevData => ({
      ...prevData, // 기존 객체의 모든 속성을 복사
      [name]: type === 'checkbox' ? checked : value // 변경된 필드만 업데이트
    }));
  };

  // 폼 제출 처리
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(userData, null, 2));
  };

  // 특정 필드만 리셋
  const resetEmail = () => {
    setUserData(prevData => ({
      ...prevData,
      email: ''
    }));
  };

  // 전체 폼 리셋
  const resetForm = () => {
    setUserData({
      username: '',
      email: '',
      age: '',
      notifications: false
    });
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="form-group">
        <label>
          사용자명:
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          이메일:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <button type="button" onClick={resetEmail}>
            이메일 초기화
          </button>
        </label>
      </div>

      <div className="form-group">
        <label>
          나이:
          <input
            type="number"
            name="age"
            value={userData.age}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          알림 수신:
          <input
            type="checkbox"
            name="notifications"
            checked={userData.notifications}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="form-actions">
        <button type="submit">제출</button>
        <button type="button" onClick={resetForm}>
          전체 초기화
        </button>
      </div>

      <div className="preview">
        <h4>현재 상태:</h4>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      </div>
    </form>
  );
};

export default UserForm;
