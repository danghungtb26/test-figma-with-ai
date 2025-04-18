import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Card, Row, Col, Typography } from 'antd';
import React from 'react';

import DeviceTrafficChart from './components/device-traffic-chart';
import LocationTrafficChart from './components/location-traffic-chart';
import ProductTrafficChart from './components/product-traffic-chart';
import ProjectTable from './components/project-table';
import UsersChart from './components/users-chart';

const { Title } = Typography;

const Dashboard2: React.FC = () => {
  // Mock data for charts
  const statsData = [
    {
      title: 'Views',
      value: '7,265',
      change: 11.01,
      isIncrease: true,
    },
    {
      title: 'Visits',
      value: '3,671',
      change: -0.03,
      isIncrease: false,
    },
    {
      title: 'New Users',
      value: '256',
      change: 15.03,
      isIncrease: true,
    },
    {
      title: 'Active Users',
      value: '2,318',
      change: 6.08,
      isIncrease: true,
    },
  ];

  return (
    <div className="p-6">
      {/* Stats Cards */}
      <Row gutter={[16, 16]} className="mb-6">
        {statsData.map((stat, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card className="h-full">
              <div>
                <Title level={5} className="text-gray-500 m-0 mb-2">
                  {stat.title}
                </Title>
                <div className="flex items-center">
                  <Title level={2} className="m-0 mr-3">
                    {stat.value}
                  </Title>
                  <div
                    className={`flex items-center ${
                      stat.isIncrease ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {stat.isIncrease ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                    <span className="ml-1">{stat.change}%</span>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Charts Section */}
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24}>
          <UsersChart />
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} lg={12}>
          <DeviceTrafficChart />
        </Col>
        <Col xs={24} lg={12}>
          <LocationTrafficChart />
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} lg={12}>
          <ProductTrafficChart />
        </Col>
        <Col xs={24} lg={12}>
          <ProjectTable />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard2;
