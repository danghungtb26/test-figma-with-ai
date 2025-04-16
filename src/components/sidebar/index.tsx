import React, { useState } from 'react';
import { Menu, Tabs, Avatar, Badge, Input, Divider } from 'antd';
import {
  AppstoreOutlined,
  HomeOutlined,
  BarChartOutlined,
  SettingOutlined,
  UserOutlined,
  TeamOutlined,
  FileTextOutlined,
  ShopOutlined,
  MessageOutlined,
  CreditCardOutlined,
  CalendarOutlined,
  FileOutlined,
  FolderOutlined,
  StarOutlined,
  SearchOutlined,
  PlusOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import type { MenuProps } from 'antd';

const { TabPane } = Tabs;

type MenuItem = Required<MenuProps>['items'][number];

// Dữ liệu mẫu cho các mục yêu thích
const favoritesData = [
  { key: 'overview', label: 'Overview', icon: <HomeOutlined /> },
  { key: 'projects', label: 'Projects', icon: <FolderOutlined /> },
  { key: 'dashboards', label: 'Dashboards', icon: <AppstoreOutlined /> },
  { key: 'messages', label: 'Messages', icon: <MessageOutlined /> },
];

// Dữ liệu mẫu cho các mục truy cập gần đây
const recentData = [
  { key: 'analytics', label: 'Analytics', icon: <BarChartOutlined />, time: '2 hours ago' },
  { key: 'team', label: 'Team Members', icon: <TeamOutlined />, time: '3 hours ago' },
  { key: 'settings', label: 'Settings', icon: <SettingOutlined />, time: 'yesterday' },
  { key: 'customers', label: 'Customers', icon: <UserOutlined />, time: '2 days ago' },
];

// Dữ liệu mẫu cho người dùng
const userData = {
  name: 'Sierra Ferguson',
  email: 'sierra@example.com',
  avatar: 'S',
  role: 'Admin',
};

// Dữ liệu mẫu cho danh mục menu
const menuItems: MenuItem[] = [
  {
    key: 'dashboard',
    icon: <AppstoreOutlined />,
    label: 'Dashboard',
    children: [
      {
        key: 'overview',
        icon: <HomeOutlined />,
        label: <Link to="/">Overview</Link>,
      },
      {
        key: 'analytics',
        icon: <BarChartOutlined />,
        label: <Link to="/analytics">Analytics</Link>,
      },
    ],
  },
  {
    key: 'projects',
    icon: <FolderOutlined />,
    label: 'Projects',
  },
  {
    key: 'customers',
    icon: <UserOutlined />,
    label: 'Customers',
    children: [
      {
        key: 'customer-list',
        icon: <TeamOutlined />,
        label: <Link to="/customers">Customer List</Link>,
      },
      {
        key: 'customer-details',
        icon: <UserOutlined />,
        label: <Link to="/customer-details">Customer Details</Link>,
      },
    ],
  },
  {
    key: 'orders',
    icon: <ShopOutlined />,
    label: 'Orders',
  },
  {
    key: 'messages',
    icon: <MessageOutlined />,
    label: <Link to="/messages">Messages</Link>,
    children: [
      {
        key: 'inbox',
        label: <Link to="/messages/inbox">Inbox</Link>,
      },
      {
        key: 'sent',
        label: <Link to="/messages/sent">Sent</Link>,
      },
      {
        key: 'drafts',
        label: <Link to="/messages/drafts">Drafts</Link>,
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    label: 'Applications',
    type: 'group',
    children: [
      {
        key: 'calendar',
        icon: <CalendarOutlined />,
        label: <Link to="/calendar">Calendar</Link>,
      },
      {
        key: 'invoices',
        icon: <FileTextOutlined />,
        label: <Link to="/invoices">Invoices</Link>,
      },
      {
        key: 'payments',
        icon: <CreditCardOutlined />,
        label: <Link to="/payments">Payments</Link>,
      },
      {
        key: 'reports',
        icon: <FileOutlined />,
        label: <Link to="/reports">Reports</Link>,
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
    label: <Link to="/settings">Settings</Link>,
  },
  {
    key: 'help',
    icon: <InfoCircleOutlined />,
    label: <Link to="/help">Help Center</Link>,
  },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('favorites');
  const [searchText, setSearchText] = useState('');

  // Xác định key chính từ pathname
  const currentPath = location.pathname.split('/')[1] || 'overview';

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="h-full flex flex-col bg-white overflow-hidden">
      {/* Logo và thông tin người dùng */}
      <div className="p-5 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center mr-3">
              <span className="text-white font-semibold text-lg">B</span>
            </div>
            <span className="font-medium text-gray-700 text-lg">Bluewind</span>
          </div>
        </div>

        {/* User profile */}
        <div className="flex items-center mt-2">
          <Badge dot status="success" offset={[-4, 32]}>
            <Avatar size={40} className="bg-gradient-to-r from-blue-500 to-purple-600 mr-3">
              {userData.avatar}
            </Avatar>
          </Badge>
          <div>
            <div className="font-medium text-gray-800">{userData.name}</div>
            <div className="text-xs text-gray-500">{userData.role}</div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="px-5 pt-4">
        <Input
          placeholder="Search..."
          prefix={<SearchOutlined style={{ color: '#a0aec0' }} />}
          value={searchText}
          onChange={handleSearch}
          className="bg-gray-50 border-0 rounded-md"
        />
      </div>

      {/* Tabs for Favorites and Recent */}
      <div className="px-5 pt-4 pb-2">
        <Tabs activeKey={activeTab} onChange={setActiveTab} className="sidebar-tabs" size="small">
          <TabPane tab="Favorites" key="favorites">
            <div className="space-y-2 mt-2">
              {favoritesData.map((item) => (
                <Link key={item.key} to={`/${item.key === 'overview' ? '' : item.key}`}>
                  <div
                    className={`flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-50 ${currentPath === item.key ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                </Link>
              ))}
              <div className="flex items-center p-2 text-gray-400 cursor-pointer hover:bg-gray-50">
                <PlusOutlined className="mr-3" />
                <span>Add new</span>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Recent" key="recent">
            <div className="space-y-2 mt-2">
              {recentData.map((item) => (
                <Link key={item.key} to={`/${item.key}`}>
                  <div className="flex items-center justify-between p-2 rounded-md cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center">
                      <span className="mr-3 text-gray-500">{item.icon}</span>
                      <span className="text-gray-700">{item.label}</span>
                    </div>
                    <span className="text-xs text-gray-400">{item.time}</span>
                  </div>
                </Link>
              ))}
            </div>
          </TabPane>
        </Tabs>
      </div>

      <Divider className="my-2" />

      {/* Main Menu */}
      <div className="px-2 flex-grow overflow-y-auto">
        <Menu
          mode="inline"
          defaultSelectedKeys={[currentPath]}
          defaultOpenKeys={['dashboard']}
          items={menuItems}
          className="border-none sidebar-menu"
          style={{ background: 'transparent' }}
        />
      </div>

      {/* Bottom Area */}
      <div className="mt-auto p-4 border-t border-gray-100">
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
              <StarOutlined className="text-blue-500" />
            </div>
            <div>
              <div className="text-sm font-medium">Premium</div>
              <div className="text-xs text-gray-500">Upgrade account</div>
            </div>
          </div>
          <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-3 rounded-md text-sm">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
