import type { LucideIcon } from 'lucide-react';
import { useStore } from '../../store/useStore';

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  gradient: 'blue' | 'pink' | 'orange' | 'green';
  subtitle?: string;
}

export const StatCard = ({ title, value, icon: Icon, gradient, subtitle }: StatCardProps) => {
  const { currency } = useStore();

  const gradients = {
    blue: 'from-blue-500 via-blue-600 to-purple-600',
    pink: 'from-pink-500 via-pink-600 to-red-500',
    orange: 'from-orange-500 via-orange-600 to-yellow-500',
    green: 'from-green-500 via-teal-500 to-cyan-600',
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
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradients[gradient]} p-6 shadow-card transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
      {/* Icon */}
      <div className="mb-4 flex items-center justify-between">
        <div className="rounded-xl bg-white/20 p-3 backdrop-blur-sm">
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>

      {/* Value */}
      <div className="mb-2">
        <p className="text-3xl font-bold text-white">
          {formatCurrency(value)}
        </p>
      </div>

      {/* Title */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-white/90">
          {title}
        </p>
        {subtitle && (
          <span className="text-xs text-white/70">{subtitle}</span>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-white/5 blur-3xl" />
    </div>
  );
};
