import { EllipsisOutlined } from '@ant-design/icons';
import { Card, Button, Dropdown, Tabs, Typography } from 'antd';
import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';

const { TabPane } = Tabs;
const { Text } = Typography;

interface ChartDataItem {
  name: string;
  thisYear: number;
  lastYear: number;
}

interface LineChartProps {
  data: ChartDataItem[];
}

const UsersLineChart: React.FC<LineChartProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState('total-users');
  // Custom tooltip component for better styling
  const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-md border border-gray-100">
          <p className="text-sm font-medium mb-1">{label}</p>
          {payload.map((entry, index: number) => (
            <div key={`item-${index}`} className="flex items-center mb-1 last:mb-0">
              <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: entry.color }} />
              <span className="text-xs font-medium text-gray-600">{entry.name}:</span>
              <span className="text-xs font-medium ml-2">{entry.value?.toLocaleString()}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="rounded-xl shadow-sm border-0" styles={{ body: { padding: '24px' } }}>
      <div className="flex justify-between items-center mb-6">
        <div>
          <Tabs activeKey={activeTab} onChange={setActiveTab} className="users-chart-tabs">
            <TabPane tab="Total Users" key="total-users" />
            <TabPane tab="Total Projects" key="total-projects" />
            <TabPane tab="Operating Status" key="operating-status" />
          </Tabs>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <div className="w-2 h-2 rounded-full bg-black mr-1"></div>
            <Text className="text-xs">This year</Text>
          </div>
          <div className="flex items-center mr-4">
            <div className="w-2 h-2 rounded-full bg-[#AEC7ED] mr-1"></div>
            <Text className="text-xs">Last year</Text>
          </div>
          <Dropdown
            menu={{
              items: [
                { key: '1', label: <span className="text-sm">View Details</span> },
                { key: '2', label: <span className="text-sm">Export Data</span> },
                { key: '3', label: <span className="text-sm">Settings</span> },
              ],
            }}
            placement="bottomRight"
          >
            <Button type="text" icon={<EllipsisOutlined />} />
          </Dropdown>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 35 }}>
            <CartesianGrid
              horizontal={true}
              vertical={false}
              stroke="#E5E7EB"
              strokeWidth={1}
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(0, 0, 0, 0.4)', fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(0, 0, 0, 0.4)', fontSize: 12 }}
              tickCount={5}
              tickFormatter={(value) => `${value / 1000}K`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              name="This Year"
              type="monotone"
              dataKey="thisYear"
              stroke="#000000"
              strokeWidth={1}
              dot={{
                r: 0,
                strokeWidth: 0,
              }}
              activeDot={{
                r: 5,
                stroke: '#000000',
                strokeWidth: 2,
                fill: '#FFFFFF',
              }}
              isAnimationActive={true}
            />
            <Line
              name="Last Year"
              type="monotone"
              dataKey="lastYear"
              stroke="#AEC7ED"
              strokeWidth={1}
              strokeDasharray="5 5"
              dot={{
                r: 0,
                strokeWidth: 0,
              }}
              activeDot={{
                r: 5,
                stroke: '#AEC7ED',
                strokeWidth: 2,
                fill: '#FFFFFF',
              }}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default UsersLineChart;
