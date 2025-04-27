import React from 'react';

interface UserProfileProps {
  name: string;
  age: number;
  email: string;
  imageUrl: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, age, email, imageUrl }) => {
  return (
    <div className="user-profile">
      <img src={imageUrl} alt={name} className="profile-image" />
      <div className="profile-info">
        <h3>{name}</h3>
        <p>나이: {age}세</p>
        <p>이메일: {email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
