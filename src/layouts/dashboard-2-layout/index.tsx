import Navbar2 from '@components/navbar2';
import SidebarLayout2 from '@components/sidebar-layout2';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard2Layout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((s) => !s);
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      {/* Left Sidebar Container */}
      <div
        className={`h-full bg-white overflow-auto transition-all duration-300 ease-in-out ${
          collapsed ? 'w-20' : 'w-[240px]'
        }`}
      >
        <div className="h-screen w-[240px] bg-transparent" />
        <div className="fixed top-0 left-0 h-screen w-[240px]">
          <SidebarLayout2 />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <Navbar2 onToggleLeftSidebar={toggleSidebar} />

        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard2Layout;
