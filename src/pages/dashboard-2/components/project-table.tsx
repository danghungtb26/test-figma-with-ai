import { CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Card, Table, Typography, Tag } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

interface ProjectData {
  key: string;
  name: string;
  status: 'completed' | 'in_progress' | 'delayed';
  date: string;
  budget: string;
}

const ProjectTable: React.FC = () => {
  const data: ProjectData[] = [
    {
      key: '1',
      name: 'New Admin Design',
      status: 'completed',
      date: 'Oct 25, 2024',
      budget: '$1,234',
    },
    {
      key: '2',
      name: 'Landing Page Design',
      status: 'in_progress',
      date: 'Oct 30, 2024',
      budget: '$2,345',
    },
    {
      key: '3',
      name: 'Mobile App Design',
      status: 'delayed',
      date: 'Nov 05, 2024',
      budget: '$3,456',
    },
    {
      key: '4',
      name: 'Website Redesign',
      status: 'completed',
      date: 'Nov 10, 2024',
      budget: '$4,567',
    },
  ];

  const columns = [
    {
      title: 'Project Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <Text strong>{text}</Text>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = '';
        let text = '';
        let icon = null;

        switch (status) {
          case 'completed':
            color = 'success';
            text = 'Completed';
            icon = <CheckCircleOutlined />;
            break;
          case 'in_progress':
            color = 'processing';
            text = 'In Progress';
            icon = <ClockCircleOutlined />;
            break;
          case 'delayed':
            color = 'error';
            text = 'Delayed';
            icon = <CloseCircleOutlined />;
            break;
        }

        return (
          <Tag icon={icon} color={color}>
            {text}
          </Tag>
        );
      },
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Budget',
      dataIndex: 'budget',
      key: 'budget',
      render: (text: string) => <Text strong>{text}</Text>,
    },
  ];

  return (
    <Card className="shadow-sm">
      <Title level={5}>Projects</Title>
      <Text type="secondary" className="block mb-4">
        Latest projects
      </Text>
      <Table dataSource={data} columns={columns} pagination={false} className="project-table" />
    </Card>
  );
};

export default ProjectTable;
