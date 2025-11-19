import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Customers } from './pages/customers/Customers';
import { Suppliers } from './pages/suppliers/Suppliers';
import { Invoices } from './pages/invoices/Invoices';
import { Purchases } from './pages/purchases/Purchases';
import { Sales } from './pages/sales/Sales';
import { Payments } from './pages/payments/Payments';
import { Inventory } from './pages/inventory/Inventory';
import { Expenses } from './pages/expenses/Expenses';
import { Pos } from './pages/pos/Pos';
import { Reports } from './pages/reports/Reports';
import { Accounting } from './pages/accounting/Accounting';
import { Settings } from './pages/settings/Settings';
import './i18n/config';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="sales" element={<Sales />} />
          <Route path="payments" element={<Payments />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="pos" element={<Pos />} />
          <Route path="reports" element={<Reports />} />
          <Route path="accounting" element={<Accounting />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
