import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  Package, 
  ShoppingCart,
  ShoppingBag,
  CreditCard,
  Wallet,
  BarChart3,
  Calculator,
  Moon,
  Globe
} from 'lucide-react';

const menuItems = [
  { path: '/', icon: LayoutDashboard, label: 'لوحة التحكم' },
  { path: '/customers', icon: Users, label: 'العملاء' },
  { path: '/suppliers', icon: Building2, label: 'الموردين' },
  { path: '/products', icon: Package, label: 'المنتجات' },
  { path: '/sales', icon: ShoppingCart, label: 'المبيعات' },
  { path: '/purchases', icon: ShoppingBag, label: 'المشتريات' },
  { path: '/payments', icon: CreditCard, label: 'السندات' },
  { path: '/expenses', icon: Wallet, label: 'المخزون' },
  { path: '/reports', icon: BarChart3, label: 'التقارير' },
  { path: '/accounting', icon: Calculator, label: 'المحاسبة' },
];

export const Layout = () => {
  const location = useLocation();

  return (
    <div className="w-screen h-screen flex flex-col bg-[#18181b]">
      {/* Header */}
      <header className="h-16 bg-[#27272a] border-b border-[#3f3f46] flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-white">نظام المحاسبة</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#3f3f46] hover:bg-[#52525b] rounded-lg transition-colors">
            <Globe className="w-4 h-4" />
            <span className="text-sm">العربية</span>
          </button>
          
          <button className="p-2 bg-[#3f3f46] hover:bg-[#52525b] rounded-lg transition-colors">
            <Moon className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-[#27272a] border-r border-[#3f3f46] overflow-y-auto">
          <nav className="p-4">
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                        ${isActive 
                          ? 'bg-white text-black' 
                          : 'text-gray-300 hover:bg-[#3f3f46] hover:text-white'
                        }
                      `}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-[#18181b]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
