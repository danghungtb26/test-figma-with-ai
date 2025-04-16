import Navbar from '@components/navbar';
import RightSidebar from '@components/right-side-bar';
import Sidebar from '@components/sidebar';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => {
    setCollapsed((s) => !s);
  };

  const toggleRightSidebar = () => {
    setRightCollapsed((s) => !s);
  };

  const rightSidebarWidth = rightCollapsed ? 'w-0' : 'w-[280px]';
  const rightSidebarTransform = rightCollapsed ? 'translate-x-full' : 'translate-x-0';

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Sidebar Container */}
      <div
        className={`h-full bg-white overflow-auto transition-all duration-300 ease-in-out ${
          collapsed ? 'w-20' : 'w-[212px]'
        }`}
      >
        <div className="h-screen w-[212px] bg-transparent" />
        <div className="fixed top-0 left-0 h-screen w-[212px] border-r border-gray-100">
          <Sidebar />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-auto ">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white shadow-sm transition-all duration-300 ease-in-out">
          <Navbar onToggleLeftSidebar={toggleSidebar} onToggleRightSidebar={toggleRightSidebar} />
        </div>

        {/* Content */}
        <Outlet />
      </div>

      {/* Right Sidebar Container */}
      <div
        className={`h-full bg-white overflow-auto transition-all duration-300 ease-in-out transform `}
      >
        <div className={`h-screen ${rightSidebarWidth} bg-transparent`} />
        <div
          className={`fixed top-0 right-0 h-screen w-[280px] border-l border-gray-100 transition-all duration-300 ease-in-out ${rightSidebarWidth} ${rightSidebarTransform}`}
        >
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
