import { TrendingUp, ShoppingCart, Wallet, DollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { StatCard } from '../../components/common/StatCard';
import { Card } from '../../components/common/Card';

export const Dashboard = () => {
  const { t } = useTranslation();

  // يمكن استبدال هذه البيانات بـ API calls في المستقبل
  const stats = {
    totalSales: 0,
    totalPurchases: 0,
    totalExpenses: 0,
    netProfit: 0,
  };

  return (
    <div className="p-6 space-y-6 animate-fadeIn">
      {/* Page Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {t('dashboard')}
        </h1>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {new Date().toLocaleDateString('ar-EG', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title={t('totalSales')}
          value={stats.totalSales}
          icon={TrendingUp}
          color="green"
        />
        <StatCard
          title={t('totalPurchases')}
          value={stats.totalPurchases}
          icon={ShoppingCart}
          color="yellow"
        />
        <StatCard
          title={t('totalExpenses')}
          value={stats.totalExpenses}
          icon={Wallet}
          color="red"
        />
        <StatCard
          title={t('netProfit')}
          value={stats.netProfit}
          icon={DollarSign}
          color="blue"
        />
      </div>

      {/* Welcome Message */}
      <Card>
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-10 h-10 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            مرحباً بك في متجر ميلانو
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            ابدأ بإضافة العملاء والمنتجات لرؤية الإحصائيات والتقارير هنا
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/customers"
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors"
            >
              إضافة عملاء
            </a>
            <a
              href="/inventory"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
            >
              إضافة منتجات
            </a>
            <a
              href="/suppliers"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
            >
              إضافة موردين
            </a>
          </div>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">العملاء</p>
            <p className="text-4xl font-bold text-gray-800 dark:text-white">0</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">المنتجات</p>
            <p className="text-4xl font-bold text-gray-800 dark:text-white">0</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">الفواتير</p>
            <p className="text-4xl font-bold text-gray-800 dark:text-white">0</p>
          </div>
        </Card>
      </div>

      {/* Tips Card */}
      <Card title="💡 نصائح للبدء">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0 font-bold text-sm">
              1
            </div>
            <div>
              <p className="font-medium text-gray-800 dark:text-white">أضف عملاءك</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">ابدأ بإضافة بيانات عملائك لتسهيل إدارة الفواتير</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0 font-bold text-sm">
              2
            </div>
            <div>
              <p className="font-medium text-gray-800 dark:text-white">أضف منتجاتك</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">أدخل المنتجات والخدمات التي تقدمها مع الأسعار والكميات</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0 font-bold text-sm">
              3
            </div>
            <div>
              <p className="font-medium text-gray-800 dark:text-white">ابدأ البيع</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">أنشئ أول فاتورة وشاهد التقارير تتحدث تلقائياً</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
