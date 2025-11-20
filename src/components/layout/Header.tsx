import { Store, Globe, DollarSign, Moon, Sun } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { useTranslation } from 'react-i18next';
import { WindowControls } from './WindowControls';

export const Header = () => {
  const { language, setLanguage, currency, setCurrency, isDarkMode, toggleTheme } = useStore();
  const { t, i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const currencies = ['YER', 'USD', 'SAR'] as const;
  const handleCurrencyChange = () => {
    const currentIndex = currencies.indexOf(currency);
    const nextIndex = (currentIndex + 1) % currencies.length;
    setCurrency(currencies[nextIndex]);
  };

  return (
    <header className="h-14 bg-dark-card border-b border-dark-border flex items-center justify-between px-6 select-none">
      {/* Left Side - Logo and App Name */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Store className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">
              {t('appName')}
            </h1>
            <p className="text-xs text-dark-muted">نظام المحاسبة</p>
          </div>
        </div>
      </div>

      {/* Right Side - Controls */}
      <div className="flex items-center gap-3">
        {/* Currency Selector */}
        <button
          onClick={handleCurrencyChange}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-bg hover:bg-dark-border transition-colors"
        >
          <DollarSign className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium text-white">
            {currency}
          </span>
        </button>

        {/* Language Toggle */}
        <button
          onClick={handleLanguageChange}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-bg hover:bg-dark-border transition-colors"
        >
          <Globe className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium text-white">
            {language === 'ar' ? 'العربية' : 'English'}
          </span>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-dark-bg hover:bg-dark-border transition-colors"
          title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-blue-500" />
          )}
        </button>

        {/* Window Controls */}
        <WindowControls />
      </div>
    </header>
  );
};
