import { 
  Wallet, 
  TrendingDown, 
  Package, 
  TrendingUp,
  LineChart as LineChartIcon
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';

const chartData = [
  { name: 'الأسبوع 1', مبيعات: 4000, مشتريات: 2400 },
  { name: 'الأسبوع 2', مبيعات: 3000, مشتريات: 1398 },
  { name: 'الأسبوع 3', مبيعات: 9800, مشتريات: 4000 },
  { name: 'الأسبوع 4', مبيعات: 3908, مشتريات: 4800 },
  { name: 'الأسبوع 5', مبيعات: 4800, مشتريات: 3800 },
  { name: 'الأسبوع 6', مبيعات: 6800, مشتريات: 4300 },
  { name: 'الأسبوع 7', مبيعات: 7200, مشتريات: 4100 },
];

export const Dashboard = () => {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">مرحباً</h1>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-black text-white rounded-lg flex items-center gap-2 hover:bg-gray-900 transition-colors">
            <span className="text-2xl">+</span>
            <span>إضافة عميل</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {/* صافي الربح */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Wallet className="w-6 h-6" />
            </div>
          </div>
          <div>
            <p className="text-sm opacity-90 mb-1">صافي الربح</p>
            <p className="text-3xl font-bold mb-1">95,000</p>
            <p className="text-xs opacity-80">ريال</p>
          </div>
        </div>

        {/* إجمالي المصروفات */}
        <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <TrendingDown className="w-6 h-6" />
            </div>
          </div>
          <div>
            <p className="text-sm opacity-90 mb-1">إجمالي المصروفات</p>
            <p className="text-3xl font-bold mb-1">35,000</p>
            <p className="text-xs opacity-80">ريال</p>
          </div>
        </div>

        {/* إجمالي المشتريات */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Package className="w-6 h-6" />
            </div>
          </div>
          <div>
            <p className="text-sm opacity-90 mb-1">إجمالي المشتريات</p>
            <p className="text-3xl font-bold mb-1">0</p>
            <p className="text-xs opacity-80">ريال</p>
          </div>
        </div>

        {/* إجمالي المبيعات */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
          <div>
            <p className="text-sm opacity-90 mb-1">إجمالي المبيعات</p>
            <p className="text-3xl font-bold mb-1">0</p>
            <p className="text-xs opacity-80">ريال</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-[#27272a] rounded-2xl p-6 border border-[#3f3f46]">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#3f3f46] rounded-lg flex items-center justify-center">
              <LineChartIcon className="w-5 h-5 text-gray-400" />
            </div>
            <h2 className="text-xl font-bold text-white">نظرة عامة علي المبيعات والمشتريات</h2>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <span className="text-sm text-gray-400">المشتريات</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-400">المبيعات</span>
            </div>
          </div>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
              <XAxis 
                dataKey="name" 
                stroke="#71717a"
                style={{ fontSize: '12px', fontFamily: 'Cairo' }}
              />
              <YAxis 
                stroke="#71717a"
                style={{ fontSize: '12px' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#27272a',
                  border: '1px solid #3f3f46',
                  borderRadius: '8px',
                  fontFamily: 'Cairo'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="مبيعات" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', r: 5 }}
              />
              <Line 
                type="monotone" 
                dataKey="مشتريات" 
                stroke="#f59e0b" 
                strokeWidth={3}
                dot={{ fill: '#f59e0b', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
