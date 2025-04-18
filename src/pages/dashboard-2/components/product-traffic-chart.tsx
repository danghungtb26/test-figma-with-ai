import { Card, Typography } from 'antd';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const { Title, Text } = Typography;

const ProductTrafficChart: React.FC = () => {
  const data = [
    { name: 'Product A', value: 820 },
    { name: 'Product B', value: 932 },
    { name: 'Product C', value: 901 },
    { name: 'Product D', value: 934 },
    { name: 'Product E', value: 1290 },
    { name: 'Product F', value: 1330 },
    { name: 'Product G', value: 1320 },
  ];

  return (
    <Card className="shadow-sm">
      <Title level={5}>Product Traffic</Title>
      <Text type="secondary" className="block mb-4">
        Traffic by product
      </Text>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '6px',
              }}
              cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
            />
            <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} maxBarSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ProductTrafficChart;
