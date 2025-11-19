import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { useStore } from '../../store/useStore';
import { useEffect } from 'react';

export const MainLayout = () => {
  const { isDarkMode, isMaximized } = useStore();

  useEffect(() => {
    // Apply dark mode class
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100 dark:bg-gray-950">
      {/* Application Window */}
      <div 
        className={`
          w-full flex flex-col 
          ${isMaximized ? 'min-h-screen' : 'min-h-screen lg:max-w-[1800px] lg:mx-auto lg:my-4 lg:rounded-xl lg:shadow-window dark:lg:shadow-window-dark lg:min-h-[95vh]'}
          bg-white dark:bg-gray-900 overflow-hidden
        `}
      >
        {/* Header */}
        <Header />
        
        {/* Main Content Area */}
        <div className="flex-1 flex overflow-hidden min-h-0">
          {/* Sidebar */}
          <Sidebar />
          
          {/* Page Content */}
          <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-50 dark:bg-gray-800">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
