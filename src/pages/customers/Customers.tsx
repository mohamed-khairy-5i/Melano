import { useState } from 'react';
import { Plus, Edit2, Trash2, Eye, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Table } from '../../components/common/Table';
import { AddCustomerModal } from '../../components/modals/AddCustomerModal';

export const Customers = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [customers, setCustomers] = useState<any[]>([]);

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

  const columns = [
    { header: t('customerName'), accessor: 'name' },
    { header: t('phone'), accessor: 'phone' },
    { header: t('email'), accessor: 'email' },
    { 
      header: t('balance'), 
      accessor: 'balance',
      cell: (row: any) => (
        <span className={`font-bold ${row.balance > 0 ? 'text-green-500' : row.balance < 0 ? 'text-red-500' : 'text-gray-500'}`}>
          {row.balance.toLocaleString()}
        </span>
      )
    },
    { header: t('address'), accessor: 'address' },
    {
      header: t('actions'),
      accessor: 'actions',
      cell: (row: any) => (
        <div className="flex items-center gap-2">
          <button
            className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
            title={t('view')}
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors"
            title={t('edit')}
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleDeleteCustomer(row.id)}
            className="p-2 rounded-lg bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
            title={t('delete')}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  const totalCredit = customers.filter(c => c.balance > 0).reduce((sum, c) => sum + c.balance, 0);
  const totalDebit = Math.abs(customers.filter(c => c.balance < 0).reduce((sum, c) => sum + c.balance, 0));

  return (
    <div className="p-6 space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {t('customers')}
        </h1>
        <Button icon={Plus} variant="primary" onClick={() => setIsAddModalOpen(true)}>
          {t('addCustomer')}
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={`${t('search')}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-10 px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <Button variant="secondary">
            {t('filter')}
          </Button>
          <Button variant="secondary">
            {t('export')}
          </Button>
        </div>
      </Card>

      {/* Customers Table */}
      <Card>
        <Table columns={columns} data={filteredCustomers} />
      </Card>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-xl">
          <p className="text-sm opacity-90 mb-1">إجمالي العملاء</p>
          <p className="text-4xl font-bold">{customers.length}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-xl">
          <p className="text-sm opacity-90 mb-1">رصيد دائن</p>
          <p className="text-4xl font-bold">{totalCredit.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white shadow-xl">
          <p className="text-sm opacity-90 mb-1">رصيد مدين</p>
          <p className="text-4xl font-bold">{totalDebit.toLocaleString()}</p>
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
