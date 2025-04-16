import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Card, Typography } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  iconBgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, iconBgColor }) => {
  const isPositive = change >= 0;

  return (
    <Card className="rounded-xl shadow-sm border-0">
      <div className="flex justify-between items-start">
        <div>
          <Text type="secondary">{title}</Text>
          <Title level={3} className="mt-1 mb-0">
            {value}
          </Title>
          <div className="flex items-center mt-2">
            {isPositive ? (
              <ArrowUpOutlined className="text-green-500 mr-1" />
            ) : (
              <ArrowDownOutlined className="text-red-500 mr-1" />
            )}
            <Text className={`${isPositive ? 'text-green-500' : 'text-red-500'} mr-2`}>
              {isPositive ? '+' : ''}
              {change}%
            </Text>
            <Text type="secondary">vs last month</Text>
          </div>
        </div>
        <div
          className={`h-12 w-12 rounded-lg flex items-center justify-center text-white`}
          style={{ backgroundColor: iconBgColor }}
        >
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
