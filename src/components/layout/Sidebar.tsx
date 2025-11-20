import { 
  LayoutDashboard, Users, Building2, FileText, ShoppingCart, 
  CreditCard, Package, Wallet, Monitor, 
  BarChart3, Calculator, Settings
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { id: 'dashboard', icon: LayoutDashboard, path: '/', label: 'لوحة التحكم' },
  { id: 'customers', icon: Users, path: '/customers', label: 'العملاء' },
  { id: 'suppliers', icon: Building2, path: '/suppliers', label: 'الموردين' },
  { id: 'inventory', icon: Package, path: '/inventory', label: 'المنتجات' },
  { id: 'invoices', icon: FileText, path: '/invoices', label: 'المبيعات' },
  { id: 'purchases', icon: ShoppingCart, path: '/purchases', label: 'المشتريات' },
  { id: 'payments', icon: CreditCard, path: '/payments', label: 'السندات والدفعات' },
  { id: 'expenses', icon: Wallet, path: '/expenses', label: 'المصروفات' },
  { id: 'pos', icon: Monitor, path: '/pos', label: 'نقطة البيع' },
  { id: 'reports', icon: BarChart3, path: '/reports', label: 'التقارير' },
  { id: 'accounting', icon: Calculator, path: '/accounting', label: 'المحاسبة' },
  { id: 'settings', icon: Settings, path: '/settings', label: 'الإعدادات' },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-dark-card border-r border-dark-border flex flex-col">
      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                    ${isActive 
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' 
                      : 'text-dark-text hover:bg-dark-border hover:text-white'
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0`} />
                  <span className="font-medium text-sm">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
