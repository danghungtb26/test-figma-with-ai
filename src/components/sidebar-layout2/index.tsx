import {
  AppstoreOutlined,
  CalendarOutlined,
  FileTextOutlined,
  FolderOpenOutlined,
  HomeOutlined,
  SettingOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, Divider, Menu } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarLayout2: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    {
      label: 'Overview',
      key: 'overview',
      icon: <HomeOutlined />,
      children: [
        {
          label: <Link to="/">Dashboard 1</Link>,
          key: '/',
        },
        {
          label: <Link to="/dashboard-2">Dashboard 2</Link>,
          key: '/dashboard-2',
        },
      ],
    },
    {
      label: 'Pages',
      key: 'pages',
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link to="/projects">Projects</Link>,
          key: '/projects',
          icon: <FolderOpenOutlined />,
        },
        {
          label: <Link to="/team">Team</Link>,
          key: '/team',
          icon: <TeamOutlined />,
        },
        {
          label: <Link to="/calendar">Calendar</Link>,
          key: '/calendar',
          icon: <CalendarOutlined />,
        },
      ],
    },
    {
      label: 'Applications',
      key: 'applications',
      icon: <ShopOutlined />,
      children: [
        {
          label: <Link to="/users">Users</Link>,
          key: '/users',
          icon: <UserOutlined />,
        },
        {
          label: <Link to="/documents">Documents</Link>,
          key: '/documents',
          icon: <FileTextOutlined />,
        },
        {
          label: <Link to="/settings">Settings</Link>,
          key: '/settings',
          icon: <SettingOutlined />,
        },
      ],
    },
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Logo */}
      <div className="p-6 text-center">
        <div className="inline-flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">B</span>
          </div>
          <span className="ml-3 text-xl font-semibold">Bluewind</span>
        </div>
      </div>

      {/* Main Menu */}
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        defaultOpenKeys={['overview', 'pages', 'applications']}
        items={menuItems}
        className="flex-1 border-0"
      />

      <Divider className="my-2" />

      {/* User Profile */}
      <div className="p-4">
        <div className="flex items-center">
          <Badge dot status="success" offset={[-4, 34]}>
            <Avatar size={40} src="/path-to-avatar.jpg">
              U
            </Avatar>
          </Badge>
          <div className="ml-3">
            <div className="font-medium">User Name</div>
            <div className="text-xs text-gray-500">Administrator</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout2;
