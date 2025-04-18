import { SearchOutlined, BellOutlined, SettingOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Avatar, Badge, Dropdown, Input, Space } from 'antd';
import React from 'react';

interface Navbar2Props {
  onToggleLeftSidebar?: () => void;
}

const Navbar2: React.FC<Navbar2Props> = ({ onToggleLeftSidebar }) => {
  const userMenuItems = [
    { key: 'profile', label: 'Profile' },
    { key: 'settings', label: 'Settings' },
    { key: 'logout', label: 'Logout' },
  ];

  const notificationItems = [
    {
      key: '1',
      label: (
        <div className="p-2">
          <div className="font-medium">New Update Available</div>
          <div className="text-xs text-gray-500">2 mins ago</div>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div className="p-2">
          <div className="font-medium">New Message</div>
          <div className="text-xs text-gray-500">1 hour ago</div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-100">
      {/* Left Side */}
      <div className="flex items-center">
        <button onClick={onToggleLeftSidebar} className="mr-4 p-2 hover:bg-gray-100 rounded-lg">
          <MenuFoldOutlined style={{ fontSize: '20px' }} />
        </button>

        <div className="relative">
          <Input
            prefix={<SearchOutlined className="text-gray-400" />}
            placeholder="Search..."
            className="w-64 bg-gray-50 border-none rounded-lg"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <Space size="large">
          {/* Notifications */}
          <Dropdown menu={{ items: notificationItems }} placement="bottomRight" trigger={['click']}>
            <Badge count={2} size="small">
              <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <BellOutlined style={{ fontSize: '20px' }} />
              </div>
            </Badge>
          </Dropdown>

          {/* Settings */}
          <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <SettingOutlined style={{ fontSize: '20px' }} />
          </div>

          {/* User Profile */}
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" trigger={['click']}>
            <div className="flex items-center cursor-pointer">
              <Avatar size={40} src="/path-to-avatar.jpg">
                U
              </Avatar>
              <div className="ml-3 hidden md:block">
                <div className="text-sm font-medium">User Name</div>
                <div className="text-xs text-gray-500">Administrator</div>
              </div>
            </div>
          </Dropdown>
        </Space>
      </div>
    </div>
  );
};

export default Navbar2;
