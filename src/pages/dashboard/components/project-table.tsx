import {
  MoreOutlined,
  CheckCircleFilled,
  ClockCircleFilled,
  CloseCircleFilled,
} from '@ant-design/icons';
import MoreMenuDropdown from '@components/more-menu-dropdown';
import { Card, Button, Table, Typography, Avatar, Progress } from 'antd';
import React from 'react';

const { Text } = Typography;

interface ProjectTableItem {
  key: string;
  name: string;
  status: string;
  statusColor: 'success' | 'processing' | 'warning' | 'error';
  date: string;
  progress: number;
  budget: string;
}

interface ProjectTableProps {
  data: ProjectTableItem[];
}

const ProjectTable: React.FC<ProjectTableProps> = ({ data }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => (
        <div className="flex items-center">
          <Avatar className="mr-2" style={{ backgroundColor: '#f56a00' }}>
            {text[0]}
          </Avatar>
          <Text strong>{text}</Text>
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text: string, record: ProjectTableItem) => (
        <div className="flex items-center">
          {record.statusColor === 'success' && (
            <CheckCircleFilled className="text-green-500 mr-2" />
          )}
          {record.statusColor === 'processing' && (
            <ClockCircleFilled className="text-blue-500 mr-2" />
          )}
          {record.statusColor === 'warning' && (
            <ClockCircleFilled className="text-yellow-500 mr-2" />
          )}
          {record.statusColor === 'error' && <CloseCircleFilled className="text-red-500 mr-2" />}
          {text}
        </div>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Progress',
      key: 'progress',
      dataIndex: 'progress',
      render: (progress: number) => <Progress percent={progress} size="small" />,
    },
    {
      title: 'Budget',
      dataIndex: 'budget',
      key: 'budget',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => <Button type="text" icon={<MoreOutlined />}></Button>,
    },
  ];

  return (
    <Card
      title="Project Status"
      className="rounded-xl shadow-sm border-0"
      extra={<MoreMenuDropdown />}
    >
      <Table dataSource={data} columns={columns} pagination={false} className="project-table" />
    </Card>
  );
};

export default ProjectTable;
