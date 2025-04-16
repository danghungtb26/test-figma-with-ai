import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import StatCard from './components/StatCard';
import UsersLineChart from './components/UsersLineChart';
import WeeklySalesChart from './components/WeeklySalesChart';
import ProjectDistributionChart from './components/ProjectDistributionChart';
import RevenuePieChart, { RevenueData } from './components/RevenuePieChart';

const { Title, Text } = Typography;

const Dashboard: React.FC = () => {
  // Data for charts and tables
  const usersChartData = [
    { name: 'Jan', thisYear: 15000, lastYear: 10000 },
    { name: 'Feb', thisYear: 18000, lastYear: 12000 },
    { name: 'Mar', thisYear: 22000, lastYear: 15000 },
    { name: 'Apr', thisYear: 20000, lastYear: 18000 },
    { name: 'May', thisYear: 25000, lastYear: 17000 },
    { name: 'Jun', thisYear: 28000, lastYear: 22000 },
    { name: 'Jul', thisYear: 30000, lastYear: 24000 },
  ];

  const barData = [
    { name: 'Mon', sales: 20 },
    { name: 'Tue', sales: 30 },
    { name: 'Wed', sales: 15 },
    { name: 'Thu', sales: 40 },
    { name: 'Fri', sales: 25 },
    { name: 'Sat', sales: 35 },
    { name: 'Sun', sales: 20 },
  ];

  const pieData: RevenueData[] = [
    { name: 'Group A', value: 400, color: '#0088FE' },
    { name: 'Group B', value: 300, color: '#00C49F' },
    { name: 'Group C', value: 300, color: '#FFBB28' },
    { name: 'Group D', value: 200, color: '#FF8042' },
  ];

  // Project distribution data
  const projectDistributionData = [
    { name: 'Web Design', value: 85, color: '#6366F1' },
    { name: 'Mobile App', value: 62, color: '#8B5CF6' },
    { name: 'UI/UX Design', value: 56, color: '#EC4899' },
    { name: 'Development', value: 37, color: '#10B981' },
  ];

  // Icons for stat cards
  const revenueIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
        fill="white"
      />
    </svg>
  );

  const customersIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
        fill="white"
      />
    </svg>
  );

  const ordersIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
        fill="white"
      />
    </svg>
  );

  const growthIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
        fill="white"
      />
    </svg>
  );

  return (
    <div className="p-6">
      <div className="flex justify-between mb-8">
        <div>
          <Title level={4} className="m-0">
            Dashboard
          </Title>
          <Text type="secondary">
            Welcome back, here's what's happening with your projects today.
          </Text>
        </div>
        <div className="flex">
          <Button type="default" className="mr-3" icon={<DownloadOutlined />}>
            Export
          </Button>
          <Button type="primary">Add Widget</Button>
        </div>
      </div>

      {/* Stat Cards Row */}
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} lg={6}>
          <StatCard
            title="Total Revenue"
            value="$36,255.50"
            change={8.5}
            icon={revenueIcon}
            iconBgColor="#3b82f6"
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <StatCard
            title="Total Customers"
            value="4,389"
            change={12.8}
            icon={customersIcon}
            iconBgColor="#8b5cf6"
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <StatCard
            title="Total Orders"
            value="1,432"
            change={3.2}
            icon={ordersIcon}
            iconBgColor="#f59e0b"
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <StatCard
            title="Growth"
            value="+ 43.5%"
            change={-4.3}
            icon={growthIcon}
            iconBgColor="#10b981"
          />
        </Col>
      </Row>

      {/* Charts Row */}
      <Row gutter={[24, 24]} className="mt-6">
        <Col xs={24} lg={18}>
          <UsersLineChart data={usersChartData} />
        </Col>
        <Col xs={24} lg={6}>
          <RevenuePieChart data={pieData} />
        </Col>
      </Row>

      {/* Table and Charts Row */}
      <Row gutter={[24, 24]} className="mt-6">
        <Col xs={24} lg={12}>
          <WeeklySalesChart data={barData} />
        </Col>
        <Col xs={24} lg={12}>
          <ProjectDistributionChart data={projectDistributionData} />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
