import { Card, Tabs } from 'antd';
import React from 'react';
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

const UsersChart: React.FC = () => {
  // Mock data
  const data = [
    { name: 'Jan', users: 4000, sessions: 2400, duration: 2400 },
    { name: 'Feb', users: 3000, sessions: 1398, duration: 2210 },
    { name: 'Mar', users: 2000, sessions: 9800, duration: 2290 },
    { name: 'Apr', users: 2780, sessions: 3908, duration: 2000 },
    { name: 'May', users: 1890, sessions: 4800, duration: 2181 },
    { name: 'Jun', users: 2390, sessions: 3800, duration: 2500 },
    { name: 'Jul', users: 3490, sessions: 4300, duration: 2100 },
  ];

  const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-md border border-gray-100">
          <p className="text-sm font-medium mb-1">{label}</p>
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center mb-1">
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
    <Card className="shadow-sm">
      <Tabs defaultActiveKey="users">
        <TabPane tab="Users" key="users">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                  tickFormatter={(value) => `${value.toLocaleString()}`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6, strokeWidth: 2, stroke: '#3B82F6', fill: 'white' }}
                />
                <Line
                  type="monotone"
                  dataKey="sessions"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6, strokeWidth: 2, stroke: '#10B981', fill: 'white' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </TabPane>
        <TabPane tab="Sessions" key="sessions">
          {/* Similar chart with different data */}
        </TabPane>
        <TabPane tab="Duration" key="duration">
          {/* Similar chart with different data */}
        </TabPane>
      </Tabs>
    </Card>
  );
};

export default UsersChart;
