import { Typography, Avatar, Badge } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

interface ContactItem {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'away';
  lastActive?: string;
}

const contactsData: ContactItem[] = [
  {
    id: '1',
    name: 'Natali Craig',
    status: 'online',
  },
  {
    id: '2',
    name: 'Drew Cano',
    status: 'offline',
    lastActive: '5h ago',
  },
  {
    id: '3',
    name: 'Andi Lane',
    status: 'online',
  },
  {
    id: '4',
    name: 'Koray Okumus',
    status: 'away',
    lastActive: '2h ago',
  },
  {
    id: '5',
    name: 'Kate Morrison',
    status: 'online',
  },
  {
    id: '6',
    name: 'Melody Macy',
    status: 'offline',
    lastActive: '12h ago',
  },
];

const Contact: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Title level={5} className="m-0">
          Contacts
        </Title>
        <Badge
          count={contactsData.filter((c) => c.status === 'online').length}
          className="bg-green-500"
        />
      </div>

      <div>
        {contactsData.map((contact) => (
          <div
            key={contact.id}
            className="p-2 flex items-center justify-between hover:bg-gray-50 rounded-lg cursor-pointer mb-3 last:mb-0"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Badge
                  dot
                  status={
                    contact.status === 'online'
                      ? 'success'
                      : contact.status === 'away'
                        ? 'warning'
                        : 'default'
                  }
                  offset={[-2, 32]}
                >
                  <Avatar size={32}>
                    {contact.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </Avatar>
                </Badge>
              </div>
              <div className="ml-4">
                <Text>{contact.name}</Text>
              </div>
            </div>
            {contact.status !== 'online' && contact.lastActive && (
              <Text type="secondary" className="text-xs">
                {contact.lastActive}
              </Text>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
