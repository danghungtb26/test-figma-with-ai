import { Divider } from 'antd';
import React from 'react';

import Activity from './activity';
import Contact from './contact';
import Notification from './notification';

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
