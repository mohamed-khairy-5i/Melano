import { useTranslation } from 'react-i18next';

export const Invoices = () => {
  const { t } = useTranslation();
  
  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        {t('invoices')}
      </h1>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          صفحة الفواتير قيد التطوير
        </p>
      </div>
    </div>
  );
};
