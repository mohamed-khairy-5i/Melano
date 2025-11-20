import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { useEffect } from 'react';

export const MainLayout = () => {
  useEffect(() => {
    // Always use dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col bg-[#0f172a] overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-[#0f172a]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
