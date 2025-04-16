import React from 'react';
import { Input, Dropdown, Menu, Tooltip } from 'antd';
import {
  SearchOutlined,
  MenuOutlined,
  StarOutlined,
  BellOutlined,
  SunOutlined,
  ClockCircleOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onToggleRightSidebar?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleRightSidebar }) => {
  const menu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="settings">Settings</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  return (
    <div className="flex justify-between items-center px-7 py-5 border-b border-gray-100">
      {/* Left side */}
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <button className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100">
            <MenuOutlined style={{ color: '#000' }} />
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100 ml-2">
            <StarOutlined style={{ color: '#000' }} />
          </button>
        </div>

        <div className="flex items-center text-sm">
          <Link to="/" className="text-blue-600 hover:text-blue-800 mr-2">
            Dashboards
          </Link>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-gray-800">Default</span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center">
        {/* Search */}
        <div className="relative mr-5">
          <Input
            prefix={<SearchOutlined className="text-gray-400" />}
            placeholder="Search"
            className="bg-gray-50 border-none rounded-md w-40"
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-200 px-1 rounded">
            /
          </span>
        </div>

        {/* Icons */}
        <div className="flex space-x-3">
          <Tooltip title="Toggle theme">
            <button className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100">
              <SunOutlined style={{ color: '#000' }} />
            </button>
          </Tooltip>

          <Tooltip title="Activities">
            <button className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100">
              <ClockCircleOutlined style={{ color: '#000' }} />
            </button>
          </Tooltip>

          <Tooltip title="Notifications">
            <button className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100">
              <BellOutlined style={{ color: '#000' }} />
            </button>
          </Tooltip>

          <Tooltip title="Right sidebar">
            <button
              className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100"
              onClick={onToggleRightSidebar}
            >
              <MenuUnfoldOutlined style={{ color: '#000' }} />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
