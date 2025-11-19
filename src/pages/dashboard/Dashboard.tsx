import { TrendingUp, ShoppingCart, Wallet, DollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { StatCard } from '../../components/common/StatCard';
import { Card } from '../../components/common/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data
const salesData = [
  { month: 'يناير', sales: 12000, purchases: 8000 },
  { month: 'فبراير', sales: 15000, purchases: 9000 },
  { month: 'مارس', sales: 18000, purchases: 11000 },
  { month: 'أبريل', sales: 14000, purchases: 8500 },
  { month: 'مايو', sales: 20000, purchases: 12000 },
  { month: 'يونيو', sales: 22000, purchases: 13000 },
];

const topProducts = [
  { id: 1, name: 'منتج A', sales: 150, revenue: 45000 },
  { id: 2, name: 'منتج B', sales: 120, revenue: 36000 },
  { id: 3, name: 'منتج C', sales: 100, revenue: 30000 },
  { id: 4, name: 'منتج D', sales: 90, revenue: 27000 },
  { id: 5, name: 'منتج E', sales: 80, revenue: 24000 },
];

export const Dashboard = () => {
  const { t } = useTranslation();

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
          value={250000}
          icon={TrendingUp}
          color="green"
          trend={{ value: 12.5, isPositive: true }}
        />
        <StatCard
          title={t('totalPurchases')}
          value={150000}
          icon={ShoppingCart}
          color="yellow"
          trend={{ value: 8.2, isPositive: true }}
        />
        <StatCard
          title={t('totalExpenses')}
          value={45000}
          icon={Wallet}
          color="red"
          trend={{ value: 3.1, isPositive: false }}
        />
        <StatCard
          title={t('netProfit')}
          value={55000}
          icon={DollarSign}
          color="blue"
          trend={{ value: 15.8, isPositive: true }}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <Card title={t('salesChart')}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" className="dark:opacity-20" />
              <XAxis dataKey="month" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }} 
              />
              <Legend />
              <Bar dataKey="sales" fill="#3b82f6" name="المبيعات" radius={[8, 8, 0, 0]} />
              <Bar dataKey="purchases" fill="#f59e0b" name="المشتريات" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Top Products */}
        <Card title={t('topProducts')}>
          <div className="space-y-3">
            {topProducts.map((product, index) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {product.sales} وحدة
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800 dark:text-white">
                    {product.revenue.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    إجمالي
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card title="النشاط الأخير">
        <div className="space-y-3">
          {[
            { type: 'sale', desc: 'فاتورة مبيعات #1001', amount: 5000, time: 'منذ 5 دقائق' },
            { type: 'purchase', desc: 'فاتورة شراء #2001', amount: -3000, time: 'منذ 15 دقيقة' },
            { type: 'expense', desc: 'مصروف: إيجار المحل', amount: -2000, time: 'منذ ساعة' },
            { type: 'sale', desc: 'فاتورة مبيعات #1002', amount: 3500, time: 'منذ ساعتين' },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.amount > 0 ? 'bg-green-500' : 'bg-red-500'
                }`} />
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    {activity.desc}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {activity.time}
                  </p>
                </div>
              </div>
              <p className={`font-bold ${
                activity.amount > 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {activity.amount > 0 ? '+' : ''}{activity.amount.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
