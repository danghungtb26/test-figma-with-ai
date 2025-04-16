import { EllipsisOutlined } from '@ant-design/icons';
import { Card, Button, Dropdown, Typography } from 'antd';
import React from 'react';
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
// Custom legend component
import { LegendProps } from 'recharts';

const { Text, Title } = Typography;

interface ProjectData {
  name: string;
  value: number;
  color: string;
}

interface ProjectDistributionChartProps {
  data: ProjectData[];
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
        <div className="text-xs font-bold mt-1">{`${data.value} projects (${(
          (data.value / 240) *
          100
        ).toFixed(0)}%)`}</div>
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ payload }: LegendProps) => {
  return (
    <div className="flex flex-col space-y-3 mt-4">
      {payload?.map((entry, index: number) => (
        <div key={`legend-${index}`} className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }} />
            <Text className="text-sm">{entry.value}</Text>
          </div>
          <Text strong>{entry.payload?.value} projects</Text>
        </div>
      ))}
    </div>
  );
};

const ProjectDistributionChart: React.FC<ProjectDistributionChartProps> = ({ data }) => {
  // Calculate total projects
  const totalProjects = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card
      className="rounded-xl shadow-sm border-0"
      title={
        <div className="flex justify-between items-center">
          <Title level={5} className="m-0">
            Project Distribution
          </Title>
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
      }
      styles={{
        body: { padding: '24px' },
        header: { border: 'none', padding: '16px 24px 0' },
      }}
    >
      <Text className="text-gray-500 block mb-4">Total {totalProjects} Projects</Text>

      <div className="h-[180px]">
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
            <Legend content={<CustomLegend />} layout="vertical" verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ProjectDistributionChart;
