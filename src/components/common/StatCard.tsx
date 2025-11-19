import type { LucideIcon } from 'lucide-react';
import { useStore } from '../../store/useStore';

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color: 'green' | 'yellow' | 'red' | 'blue';
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export const StatCard = ({ title, value, icon: Icon, color, trend }: StatCardProps) => {
  const { currency } = useStore();

  const colorClasses = {
    green: 'from-green-500 to-green-600',
    yellow: 'from-yellow-500 to-yellow-600',
    red: 'from-red-500 to-red-600',
    blue: 'from-blue-500 to-blue-600',
  };

  const formatCurrency = (amount: number) => {
    const symbols: Record<string, string> = {
      YER: 'ر.ي',
      USD: '$',
      SAR: 'ر.س',
    };
    
    return `${amount.toLocaleString()} ${symbols[currency]}`;
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {trend && (
          <div className={`text-sm font-medium ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {trend.isPositive ? '↑' : '↓'} {trend.value}%
          </div>
        )}
      </div>
      <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">
        {title}
      </h3>
      <p className="text-2xl font-bold text-gray-800 dark:text-white">
        {formatCurrency(value)}
      </p>
    </div>
  );
};
