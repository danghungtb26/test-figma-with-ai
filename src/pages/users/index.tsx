import { SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Table, Button, Space, Input } from 'antd';
import React from 'react';

const Users: React.FC = () => {
  const dataSource = [
    {
      key: '1',
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
    },
    {
      key: '2',
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
    },
    {
      key: '3',
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'User',
    },
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Button type="primary" icon={<EditOutlined />} size="small">
            Edit
          </Button>
          <Button type="primary" danger icon={<DeleteOutlined />} size="small">
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <Space>
          <Input placeholder="Search users" prefix={<SearchOutlined />} />
          <Button type="primary">Add User</Button>
        </Space>
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Users;
