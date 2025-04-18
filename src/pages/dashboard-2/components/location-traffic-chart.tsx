import { Card, Typography } from 'antd';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const { Title, Text } = Typography;

const LocationTrafficChart: React.FC = () => {
  const data = [
    { name: 'United States', value: 38, color: '#3B82F6' },
    { name: 'Canada', value: 24, color: '#10B981' },
    { name: 'Mexico', value: 19, color: '#F59E0B' },
    { name: 'Other', value: 19, color: '#6B7280' },
  ];

  const CustomLegend = ({ payload }: any) => (
    <div className="flex flex-col space-y-2">
      {payload.map((entry: any, index: number) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }} />
            <Text>{entry.value}</Text>
          </div>
          <Text strong>{entry.payload.value}%</Text>
        </div>
      ))}
    </div>
  );

  return (
    <Card className="shadow-sm">
      <Title level={5}>Location Traffic</Title>
      <Text type="secondary" className="block mb-4">
        Traffic by location
      </Text>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={60}
              dataKey="value"
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend
              content={<CustomLegend />}
              layout="vertical"
              align="right"
              verticalAlign="middle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default LocationTrafficChart;
