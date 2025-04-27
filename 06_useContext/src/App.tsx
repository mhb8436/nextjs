import React from "react";
import "./styles.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import NotificationList from "./components/NotificationList";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <NotificationProvider>
          <div className="app">
            <Header />
            <main>
              <section className="section">
                <h2>Context API와 useContext 훅</h2>
                <p className="description">
                  이 예제는 Context API와 useContext 훅을 사용하여 다음 기능들을 구현합니다:
                </p>
                <ul>
                  <li>테마 전환 (다크 모드/라이트 모드)</li>
                  <li>사용자 인증 및 프로필 관리</li>
                  <li>알림 시스템</li>
                </ul>
              </section>

              <section className="section">
                <h2>사용자 프로필</h2>
                <UserProfile />
              </section>

              <NotificationList />
            </main>
          </div>
        </NotificationProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
