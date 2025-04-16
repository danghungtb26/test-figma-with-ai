import { EllipsisOutlined } from '@ant-design/icons';
import { Card, Button, Dropdown, Menu } from 'antd';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface WeeklySalesChartProps {
  data: Array<{
    name: string;
    sales: number;
  }>;
}

const WeeklySalesChart: React.FC<WeeklySalesChartProps> = ({ data }) => {
  // Menu dropdown for card "more" button
  const moreMenu = (
    <Menu>
      <Menu.Item key="1">View Details</Menu.Item>
      <Menu.Item key="2">Export Data</Menu.Item>
      <Menu.Item key="3">Settings</Menu.Item>
    </Menu>
  );

  return (
    <Card
      title="Weekly Sales"
      className="rounded-xl shadow-sm border-0 h-full"
      extra={
        <Dropdown overlay={moreMenu} placement="bottomRight">
          <Button type="text" icon={<EllipsisOutlined />} />
        </Dropdown>
      }
    >
      <div className="aspect-[4/3] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default WeeklySalesChart;
