import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';
import React from 'react';

const MoreMenuDropdown: React.FC = () => {
  const items = [
    { key: '1', label: 'View Details' },
    { key: '2', label: 'Export Data' },
    { key: '3', label: 'Settings' },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <Button type="text" icon={<EllipsisOutlined />} />
    </Dropdown>
  );
};

export default MoreMenuDropdown;
