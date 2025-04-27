import React from 'react';
import { useNotification } from '../contexts/NotificationContext';

const NotificationList: React.FC = () => {
  const { notifications, removeNotification, clearNotifications } = useNotification();

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className="notification-list">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={`notification ${notification.type}`}
        >
          <span className="message">{notification.message}</span>
          <button
            className="close"
            onClick={() => removeNotification(notification.id)}
          >
            ×
          </button>
        </div>
      ))}
      {notifications.length > 1 && (
        <button
          className="clear-all"
          onClick={clearNotifications}
        >
          모두 지우기
        </button>
      )}
    </div>
  );
};

export default NotificationList;
