import { TrendingUp, ShoppingCart, Wallet, Package2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { StatCard } from '../../components/common/StatCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample chart data
const chartData = [
  { name: 'الأسبوع 1', sales: 4000, purchases: 2400 },
  { name: 'الأسبوع 2', sales: 3000, purchases: 1398 },
  { name: 'الأسبوع 3', sales: 9800, purchases: 3000 },
  { name: 'الأسبوع 4', sales: 3908, purchases: 4800 },
  { name: 'الأسبوع 5', sales: 4800, purchases: 3800 },
  { name: 'الأسبوع 6', sales: 6800, purchases: 4300 },
  { name: 'الأسبوع 7', sales: 7200, purchases: 4100 },
];

export const Dashboard = () => {
  const { t } = useTranslation();

  // Statistics
  const stats = {
    totalSales: 95000,
    totalPurchases: 35000,
    totalExpenses: 0,
    netProfit: 0,
  };

  return (
    <div className="min-h-screen bg-dark-bg p-6 space-y-6">
      {/* Page Title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">
            {t('dashboard')}
          </h1>
          <p className="text-dark-muted">
            نظرة عامة على نشاط المتجر
          </p>
        </div>
        <div className="text-sm text-dark-muted">
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
          title="صافي الربح"
          subtitle="هذا الشهر"
          value={stats.totalSales}
          icon={Wallet}
          gradient="blue"
        />
        <StatCard
          title="إجمالي المصروفات"
          subtitle="هذا الشهر"
          value={stats.totalPurchases}
          icon={TrendingUp}
          gradient="pink"
        />
        <StatCard
          title="إجمالي المشتريات"
          subtitle="هذا الشهر"
          value={stats.totalExpenses}
          icon={Package2}
          gradient="orange"
        />
        <StatCard
          title="إجمالي المبيعات"
          subtitle="هذا الشهر"
          value={stats.netProfit}
          icon={ShoppingCart}
          gradient="green"
        />
      </div>

      {/* Chart */}
      <div className="bg-dark-card rounded-2xl border border-dark-border p-6 shadow-card">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white mb-1">
            نظرة عامة على المبيعات والمشتريات
          </h2>
          <p className="text-sm text-dark-muted">
            المبيعات • المشتريات
          </p>
        </div>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
              <XAxis 
                dataKey="name" 
                stroke="#737373"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#737373"
                style={{ fontSize: '12px' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #2a2a2a',
                  borderRadius: '12px',
                  color: '#e5e5e5'
                }}
              />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#f59e0b"
                strokeWidth={3}
                dot={{ fill: '#f59e0b', r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="purchases"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ fill: '#10b981', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          href="/customers"
          className="block bg-dark-card rounded-2xl border border-dark-border p-6 shadow-card hover:border-blue-500/50 transition-all duration-300 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <TrendingUp className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">
                إدارة العملاء
              </h3>
              <p className="text-sm text-dark-muted">
                عرض وإضافة العملاء
              </p>
            </div>
          </div>
        </a>

        <a
          href="/inventory"
          className="block bg-dark-card rounded-2xl border border-dark-border p-6 shadow-card hover:border-green-500/50 transition-all duration-300 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
              <Package2 className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">
                إدارة المخزون
              </h3>
              <p className="text-sm text-dark-muted">
                عرض وإضافة المنتجات
              </p>
            </div>
          </div>
        </a>

        <a
          href="/invoices"
          className="block bg-dark-card rounded-2xl border border-dark-border p-6 shadow-card hover:border-purple-500/50 transition-all duration-300 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
              <ShoppingCart className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">
                الفواتير
              </h3>
              <p className="text-sm text-dark-muted">
                إنشاء فواتير جديدة
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
