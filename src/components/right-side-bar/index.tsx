import React from 'react';
import { Divider } from 'antd';
import Notification from './notification';
import Activity from './activity';
import Contact from './contact';

const RightSidebar: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow overflow-auto p-4">
        <Notification />
        <Divider className="my-4" />
        <Activity />
        <Divider className="my-4" />
        <Contact />
      </div>
    </div>
  );
};

export default RightSidebar;
