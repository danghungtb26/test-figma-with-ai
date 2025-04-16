import React from 'react';
import { Typography, Badge } from 'antd';
import {
  BugOutlined,
  UserOutlined,
  NotificationOutlined,
  BellOutlined,
  FileTextOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

interface NotificationItem {
  id: string;
  icon: React.ReactNode;
  iconBgColor: string;
  title: string;
  time: string;
}

const notificationData: NotificationItem[] = [
  {
    id: '1',
    icon: <BugOutlined />,
    iconBgColor: 'bg-blue-100',
    title: 'You fixed a bug.',
    time: 'Just now',
  },
  {
    id: '2',
    icon: <UserOutlined />,
    iconBgColor: 'bg-indigo-100',
    title: 'New user registered.',
    time: '59 minutes ago',
  },
  {
    id: '3',
    icon: <BellOutlined />,
    iconBgColor: 'bg-amber-100',
    title: 'You have a new notification.',
    time: '2 hours ago',
  },
  {
    id: '4',
    icon: <FileTextOutlined />,
    iconBgColor: 'bg-emerald-100',
    title: 'Report has been updated.',
    time: 'Yesterday',
  },
];

const Notification: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Title level={5} className="m-0">
          Notifications
        </Title>
        <Badge count={4} size="small" />
      </div>

      {notificationData.map((notification) => (
        <div
          key={notification.id}
          className="p-2 mb-3 flex cursor-pointer hover:bg-gray-50 rounded-lg"
        >
          <div
            className={`${notification.iconBgColor} h-8 w-8 rounded-md flex items-center justify-center mr-3`}
          >
            {React.cloneElement(notification.icon as React.ReactElement, {
              style: { color: 'black' },
            })}
          </div>
          <div>
            <Text strong className="block">
              {notification.title}
            </Text>
            <Text type="secondary" className="text-xs">
              {notification.time}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;
