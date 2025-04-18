import { Card, Typography } from 'antd';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, PieLabel } from 'recharts';

const { Title, Text } = Typography;

const DeviceTrafficChart: React.FC = () => {
  const data = [
    { name: 'Desktop', value: 63, color: '#3B82F6' },
    { name: 'Mobile', value: 25, color: '#10B981' },
    { name: 'Tablet', value: 12, color: '#F59E0B' },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel: PieLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={12}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

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
      <Title level={5}>Device Traffic</Title>
      <Text type="secondary" className="block mb-4">
        Traffic by device type
      </Text>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              innerRadius={60}
              dataKey="value"
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

export default DeviceTrafficChart;
