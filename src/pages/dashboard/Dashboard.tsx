import { TrendingUp, ShoppingCart, Wallet, Package2, Users, DollarSign, ShoppingBag, ArrowUp, ArrowDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// مبيعات حسب المنتج
const salesByProduct = [
  { name: 'ثلاجات', value: 45000, color: '#3b82f6' },
  { name: 'غسالات', value: 35000, color: '#10b981' },
  { name: 'مكيفات', value: 28000, color: '#f59e0b' },
  { name: 'تلفزيونات', value: 42000, color: '#8b5cf6' },
  { name: 'مواقد', value: 18000, color: '#ec4899' },
];

export const Dashboard = () => {

  return (
    <div className="min-h-screen bg-[#0f172a] p-8 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            لوحة التحكم
          </h1>
          <p className="text-slate-400">
            نظرة عامة على نشاط المتجر
          </p>
        </div>
        <div className="text-sm text-slate-400">
          {new Date().toLocaleDateString('ar-SA', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      {/* Stats Cards - الصف الأول */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* صافي الربح */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center gap-1 text-white/90 text-sm">
              <ArrowUp className="w-4 h-4" />
              <span>+12.5%</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-blue-100 text-sm font-medium">صافي الربح</p>
            <p className="text-3xl font-bold text-white">168,000 ر.ي</p>
            <p className="text-blue-100 text-xs">هذا الشهر</p>
          </div>
        </div>

        {/* إجمالي المصروفات */}
        <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center gap-1 text-white/90 text-sm">
              <ArrowDown className="w-4 h-4" />
              <span>-3.2%</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-pink-100 text-sm font-medium">إجمالي المصروفات</p>
            <p className="text-3xl font-bold text-white">45,800 ر.ي</p>
            <p className="text-pink-100 text-xs">هذا الشهر</p>
          </div>
        </div>

        {/* إجمالي المشتريات */}
        <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Package2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center gap-1 text-white/90 text-sm">
              <ArrowUp className="w-4 h-4" />
              <span>+8.1%</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-orange-100 text-sm font-medium">إجمالي المشتريات</p>
            <p className="text-3xl font-bold text-white">285,500 ر.ي</p>
            <p className="text-orange-100 text-xs">هذا الشهر</p>
          </div>
        </div>

        {/* إجمالي المبيعات */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center gap-1 text-white/90 text-sm">
              <ArrowUp className="w-4 h-4" />
              <span>+15.3%</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-green-100 text-sm font-medium">إجمالي المبيعات</p>
            <p className="text-3xl font-bold text-white">499,300 ر.ي</p>
            <p className="text-green-100 text-xs">هذا الشهر</p>
          </div>
        </div>
      </div>

      {/* الصف الثاني */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* المبيعات حسب المنتج - Chart */}
        <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">
                المبيعات حسب المنتج
              </h2>
              <p className="text-sm text-slate-400">
                آخر 30 يوم
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg text-sm hover:bg-blue-500/20 transition-colors">
                شهري
              </button>
              <button className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg text-sm hover:bg-slate-700 transition-colors">
                يومي
              </button>
            </div>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesByProduct}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#94a3b8"
                  style={{ fontSize: '13px', fontFamily: 'Cairo' }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  stroke="#94a3b8"
                  style={{ fontSize: '12px' }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '12px',
                    color: '#e2e8f0',
                    fontFamily: 'Cairo'
                  }}
                  formatter={(value: number) => [`${value.toLocaleString()} ر.ي`, 'المبلغ']}
                  cursor={{ fill: '#334155', opacity: 0.3 }}
                />
                <Bar 
                  dataKey="value" 
                  radius={[8, 8, 0, 0]}
                  maxBarSize={50}
                >
                  {salesByProduct.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Stats - Sidebar */}
        <div className="space-y-6">
          {/* عدد العملاء */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 shadow-xl hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-green-400 text-sm flex items-center gap-1">
                <ArrowUp className="w-4 h-4" />
                +24
              </span>
            </div>
            <h3 className="text-slate-400 text-sm mb-1">عدد العملاء</h3>
            <p className="text-3xl font-bold text-white">1,248</p>
            <p className="text-slate-500 text-xs mt-2">زيادة 5.4% هذا الشهر</p>
          </div>

          {/* عدد المنتجات */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 shadow-xl hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <ShoppingBag className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-green-400 text-sm flex items-center gap-1">
                <ArrowUp className="w-4 h-4" />
                +12
              </span>
            </div>
            <h3 className="text-slate-400 text-sm mb-1">عدد المنتجات</h3>
            <p className="text-3xl font-bold text-white">856</p>
            <p className="text-slate-500 text-xs mt-2">منتج نشط في المخزون</p>
          </div>

          {/* متوسط قيمة الفاتورة */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 shadow-xl hover:border-green-500/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-500/10 rounded-xl">
                <DollarSign className="w-6 h-6 text-green-400" />
              </div>
              <span className="text-green-400 text-sm flex items-center gap-1">
                <ArrowUp className="w-4 h-4" />
                +8.2%
              </span>
            </div>
            <h3 className="text-slate-400 text-sm mb-1">متوسط قيمة الفاتورة</h3>
            <p className="text-3xl font-bold text-white">3,450 ر.ي</p>
            <p className="text-slate-500 text-xs mt-2">آخر 30 يوم</p>
          </div>
        </div>
      </div>
    </div>
  );
};
