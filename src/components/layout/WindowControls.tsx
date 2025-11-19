import { Minus, Square, X, Sun, Moon } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { useTranslation } from 'react-i18next';

export const WindowControls = () => {
  const { isDarkMode, toggleTheme, isMaximized, toggleMaximize } = useStore();
  const { t } = useTranslation();

  const handleMinimize = () => {
    // In a real desktop app, this would minimize the window
    console.log('Minimize');
  };

  const handleClose = () => {
    // In a real desktop app, this would close the window
    if (confirm('هل تريد إغلاق التطبيق؟ / Close application?')) {
      window.close();
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
      >
        {isDarkMode ? (
          <Sun className="w-4 h-4 text-yellow-500" />
        ) : (
          <Moon className="w-4 h-4 text-gray-600" />
        )}
      </button>

      {/* Window Controls */}
      <div className="flex items-center">
        <button
          onClick={handleMinimize}
          className="w-10 h-8 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          title={t('minimize')}
        >
          <Minus className="w-4 h-4" />
        </button>
        <button
          onClick={toggleMaximize}
          className="w-10 h-8 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          title={t('maximize')}
        >
          <Square className={`w-3.5 h-3.5 ${isMaximized ? 'opacity-100' : 'opacity-70'}`} />
        </button>
        <button
          onClick={handleClose}
          className="w-10 h-8 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
          title={t('close')}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
