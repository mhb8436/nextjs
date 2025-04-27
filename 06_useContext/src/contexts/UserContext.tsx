import React, { createContext, useContext, useState } from 'react';

interface User {
  name: string;
  email: string;
  isLoggedIn: boolean;
}

interface UserContextType {
  user: User | null;
  login: (name: string, email: string) => void;
  logout: () => void;
  updateProfile: (name: string, email: string) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (name: string, email: string) => {
    setUser({
      name,
      email,
      isLoggedIn: true
    });
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (name: string, email: string) => {
    if (user) {
      setUser({
        ...user,
        name,
        email
      });
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};
