import React from 'react';
import { Card, Button, Dropdown, Typography } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  TooltipProps,
  PieLabel,
} from 'recharts';

const { Text, Title } = Typography;

export interface RevenueData {
  name: string;
  value: number;
  color?: string;
}

interface RevenuePieChartProps {
  data: RevenueData[];
}

const RADIAN = Math.PI / 180;

// Custom label component for the pie chart
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
      fontWeight="600"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

// Custom tooltip
const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-2 rounded-lg shadow-md border border-gray-100">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: data.color }} />
          <span className="text-xs font-medium">{data.name}</span>
        </div>
        <div className="text-xs font-bold mt-1">{`${data.value.toLocaleString()} (${(
          data.percent * 100
        ).toFixed(0)}%)`}</div>
      </div>
    );
  }
  return null;
};

const RevenuePieChart: React.FC<RevenuePieChartProps> = ({ data }) => {
  // Calculate total traffic
  const totalTraffic = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card
      className="rounded-xl shadow-sm border-0"
      title={
        <div className="flex justify-between items-center">
          <Title level={5} className="m-0">
            Traffic by Location
          </Title>
          <Dropdown
            menu={{
              items: [
                {
                  key: '1',
                  label: <span className="text-sm">View Details</span>,
                },
                {
                  key: '2',
                  label: <span className="text-sm">Export Data</span>,
                },
                {
                  key: '3',
                  label: <span className="text-sm">Settings</span>,
                },
              ],
            }}
            placement="bottomRight"
          >
            <Button type="text" icon={<EllipsisOutlined />} />
          </Dropdown>
        </div>
      }
      styles={{
        body: { padding: '24px' },
        header: { border: 'none', padding: '16px 24px 0' },
      }}
    >
      <Text className="text-gray-500 block mb-4">
        Total Visitors: {totalTraffic.toLocaleString()}
      </Text>

      <div className="flex items-center h-[180px]">
        <div className="w-2/3">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                innerRadius={50}
                dataKey="value"
                strokeWidth={0}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-1/3">
          <Legend
            // content={<CustomLegend />}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </div>
      </div>
    </Card>
  );
};

export default RevenuePieChart;
