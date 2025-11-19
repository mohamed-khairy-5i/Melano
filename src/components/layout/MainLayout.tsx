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
    <div className="w-screen h-screen flex flex-col bg-gray-50 dark:bg-gray-800 overflow-hidden">
      {/* Application Window */}
      <div 
        className={`
          w-full h-full flex flex-col 
          ${isMaximized ? '' : 'max-w-[1600px] max-h-[900px] m-auto rounded-xl shadow-window dark:shadow-window-dark'}
          bg-gray-50 dark:bg-gray-800 overflow-hidden
        `}
      >
        {/* Header */}
        <Header />
        
        {/* Main Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar */}
          <Sidebar />
          
          {/* Page Content */}
          <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-800">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
