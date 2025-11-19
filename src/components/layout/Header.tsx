import { Store, Globe, DollarSign } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { useTranslation } from 'react-i18next';
import { WindowControls } from './WindowControls';

export const Header = () => {
  const { language, setLanguage, currency, setCurrency } = useStore();
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
    <header className="h-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 select-none">
      {/* Left Side - Logo and App Name */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center shadow-lg">
            <Store className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-lg font-bold text-gray-800 dark:text-white">
            {t('appName')}
          </h1>
        </div>
      </div>

      {/* Right Side - Controls */}
      <div className="flex items-center gap-4">
        {/* Currency Selector */}
        <button
          onClick={handleCurrencyChange}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <DollarSign className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {currency}
          </span>
        </button>

        {/* Language Toggle */}
        <button
          onClick={handleLanguageChange}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <Globe className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {language === 'ar' ? 'العربية' : 'English'}
          </span>
        </button>

        {/* Window Controls */}
        <WindowControls />
      </div>
    </header>
  );
};
