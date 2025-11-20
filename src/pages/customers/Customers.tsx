import { useState } from 'react';
import { Plus, Edit2, Trash2, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/common/Button';
import { AddCustomerModal } from '../../components/modals/AddCustomerModal';

export const Customers = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [customers, setCustomers] = useState<any[]>([
    { id: 1, name: 'عميل متجر ميلانو النموذجي', phone: '7817070707', email: 'example@milano.com', balance: 0, address: 'صنعاء' }
  ]);

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.phone.includes(searchQuery)
  );

  const handleAddCustomer = (newCustomer: any) => {
    setCustomers(prev => [...prev, newCustomer]);
  };

  const handleDeleteCustomer = (id: number) => {
    if (confirm('هل أنت متأكد من حذف هذا العميل؟')) {
      setCustomers(prev => prev.filter(c => c.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">
            {t('customers')}
          </h1>
          <p className="text-dark-muted">
            إدارة قائمة العملاء
          </p>
        </div>
        <Button icon={Plus} variant="primary" onClick={() => setIsAddModalOpen(true)}>
          إضافة عميل
        </Button>
      </div>

      {/* Search Bar */}
      <div className="bg-dark-card rounded-2xl border border-dark-border p-4 shadow-card">
        <div className="relative">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-muted" />
          <input
            type="text"
            placeholder="البحث عن عميل..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pr-12 pl-4 py-3 bg-dark-bg border border-dark-border rounded-xl text-white placeholder-dark-muted focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-dark-card rounded-2xl border border-dark-border overflow-hidden shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-border">
                <th className="text-right px-6 py-4 text-sm font-semibold text-dark-muted">الاسم</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-dark-muted">الهاتف</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-dark-muted">البريد الإلكتروني</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-dark-muted">الرصيد</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-dark-muted">العنوان</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-dark-muted">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-dark-muted">
                    لا توجد بيانات
                  </td>
                </tr>
              ) : (
                filteredCustomers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="border-b border-dark-border hover:bg-dark-bg/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-white">{customer.name}</td>
                    <td className="px-6 py-4 text-dark-text">{customer.phone}</td>
                    <td className="px-6 py-4 text-dark-text">{customer.email}</td>
                    <td className="px-6 py-4">
                      <span className={`font-semibold ${
                        customer.balance > 0 ? 'text-green-500' : 
                        customer.balance < 0 ? 'text-red-500' : 
                        'text-dark-muted'
                      }`}>
                        {customer.balance.toLocaleString()} ر.ي
                      </span>
                    </td>
                    <td className="px-6 py-4 text-dark-text">{customer.address}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-2 rounded-lg bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors"
                          title="تعديل"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteCustomer(customer.id)}
                          className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors"
                          title="حذف"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Customer Modal */}
      <AddCustomerModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddCustomer}
      />
    </div>
  );
};
