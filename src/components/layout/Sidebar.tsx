import { 
  LayoutDashboard, Users, Building2, FileText, ShoppingCart, 
  TrendingUp, CreditCard, Package, Wallet, Monitor, 
  BarChart3, Calculator, Settings, ChevronRight 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useStore } from '../../store/useStore';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { id: 'dashboard', icon: LayoutDashboard, path: '/' },
  { id: 'customers', icon: Users, path: '/customers' },
  { id: 'suppliers', icon: Building2, path: '/suppliers' },
  { id: 'invoices', icon: FileText, path: '/invoices' },
  { id: 'purchases', icon: ShoppingCart, path: '/purchases' },
  { id: 'sales', icon: TrendingUp, path: '/sales' },
  { id: 'payments', icon: CreditCard, path: '/payments' },
  { id: 'inventory', icon: Package, path: '/inventory' },
  { id: 'expenses', icon: Wallet, path: '/expenses' },
  { id: 'pos', icon: Monitor, path: '/pos' },
  { id: 'reports', icon: BarChart3, path: '/reports' },
  { id: 'accounting', icon: Calculator, path: '/accounting' },
  { id: 'settings', icon: Settings, path: '/settings' },
];

export const Sidebar = () => {
  const { t } = useTranslation();
  const { isSidebarCollapsed, toggleSidebar } = useStore();
  const location = useLocation();

  return (
    <aside 
      className={`${
        isSidebarCollapsed ? 'w-16' : 'w-64'
      } bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="h-12 flex items-center justify-center border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <ChevronRight 
          className={`w-5 h-5 transition-transform duration-300 ${
            isSidebarCollapsed ? '' : 'rotate-180'
          }`}
        />
      </button>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
                    ${isActive 
                      ? 'bg-primary-500 text-white shadow-lg' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }
                  `}
                  title={!isSidebarCollapsed ? '' : t(item.id)}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : ''}`} />
                  {!isSidebarCollapsed && (
                    <span className="font-medium text-sm truncate">
                      {t(item.id)}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
