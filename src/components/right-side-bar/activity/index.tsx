import { Typography, Avatar } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

interface ActivityItem {
  id: string;
  name: string;
  initials: string;
  action: string;
  time: string;
  avatarColor: string;
}

const activityData: ActivityItem[] = [
  {
    id: '1',
    name: 'Alex Morgan',
    initials: 'AM',
    action: 'Changed the style.',
    time: 'Just now',
    avatarColor: 'bg-purple-400',
  },
  {
    id: '2',
    name: 'Frank Esteban',
    initials: 'FE',
    action: 'Released a new version.',
    time: '59 minutes ago',
    avatarColor: 'bg-pink-400',
  },
  {
    id: '3',
    name: 'Mike Doe',
    initials: 'MD',
    action: 'Submitted a bug report.',
    time: '12 hours ago',
    avatarColor: 'bg-blue-400',
  },
  {
    id: '4',
    name: 'David Clark',
    initials: 'DC',
    action: 'Modified data in Page X.',
    time: 'Today, 11:59 AM',
    avatarColor: 'bg-yellow-400',
  },
  {
    id: '5',
    name: 'Anna Smith',
    initials: 'AS',
    action: 'Deleted a page in Project X.',
    time: 'Apr 14, 2025',
    avatarColor: 'bg-green-400',
  },
];

const Activity: React.FC = () => {
  return (
    <div>
      <div className="mb-4">
        <Title level={5} className="m-0">
          Activities
        </Title>
      </div>

      {activityData.map((activity) => (
        <div key={activity.id} className="p-2 mb-3 flex hover:bg-gray-50 rounded-md cursor-pointer">
          <div className="flex-shrink-0">
            <Avatar size={32} className={`${activity.avatarColor} text-white`}>
              {activity.initials}
            </Avatar>
          </div>
          <div className="ml-4">
            <Text strong className="block">
              {activity.action}
            </Text>
            <Text type="secondary" className="text-xs">
              {activity.time}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activity;
