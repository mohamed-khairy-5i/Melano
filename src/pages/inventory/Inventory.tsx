import { useState } from 'react';
import { Plus, Edit2, Trash2, Eye, Search, AlertTriangle, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Table } from '../../components/common/Table';
import { AddProductModal } from '../../components/modals/AddProductModal';

export const Inventory = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [products, setProducts] = useState<any[]>([]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const lowStockProducts = products.filter(p => p.quantity <= p.minQuantity);

  const handleAddProduct = (newProduct: any) => {
    setProducts(prev => [...prev, newProduct]);
  };

  const handleDeleteProduct = (id: number) => {
    if (confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  const columns = [
    { header: t('productCode'), accessor: 'code' },
    { 
      header: t('productName'), 
      accessor: 'name',
      cell: (row: any) => (
        <div className="flex items-center gap-2">
          {row.quantity <= row.minQuantity && (
            <AlertTriangle className="w-4 h-4 text-red-500" />
          )}
          <span>{row.name}</span>
        </div>
      )
    },
    { header: t('category'), accessor: 'category' },
    { 
      header: t('quantity'), 
      accessor: 'quantity',
      cell: (row: any) => (
        <span className={`font-bold ${row.quantity <= row.minQuantity ? 'text-red-500' : 'text-green-500'}`}>
          {row.quantity}
        </span>
      )
    },
    { 
      header: t('purchasePrice'), 
      accessor: 'purchasePrice',
      cell: (row: any) => row.purchasePrice.toLocaleString()
    },
    { 
      header: t('sellingPrice'), 
      accessor: 'sellingPrice',
      cell: (row: any) => row.sellingPrice.toLocaleString()
    },
    { header: t('supplier'), accessor: 'supplier' },
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
            onClick={() => handleDeleteProduct(row.id)}
            className="p-2 rounded-lg bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
            title={t('delete')}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  const totalValue = products.reduce((sum, p) => sum + (p.purchasePrice * p.quantity), 0);
  const totalQuantity = products.reduce((sum, p) => sum + p.quantity, 0);

  return (
    <div className="p-6 space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {t('inventory')}
        </h1>
        <Button icon={Plus} variant="primary" onClick={() => setIsAddModalOpen(true)}>
          {t('addProduct')}
        </Button>
      </div>

      {/* Low Stock Alert */}
      {lowStockProducts.length > 0 && (
        <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
            <div>
              <p className="font-bold text-red-700 dark:text-red-400">
                تنبيه: {lowStockProducts.length} منتج قارب على النفاد
              </p>
              <p className="text-sm text-red-600 dark:text-red-500 mt-1">
                المنتجات التالية تحتاج إلى إعادة طلب: {lowStockProducts.map(p => p.name).join('، ')}
              </p>
            </div>
          </div>
        </div>
      )}

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

      {/* Products Table */}
      <Card>
        <Table columns={columns} data={filteredProducts} />
      </Card>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-xl">
          <Package className="w-8 h-8 mb-2 opacity-80" />
          <p className="text-sm opacity-90 mb-1">إجمالي المنتجات</p>
          <p className="text-4xl font-bold">{products.length}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-xl">
          <p className="text-sm opacity-90 mb-1">قيمة المخزون</p>
          <p className="text-3xl font-bold">{totalValue.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-xl">
          <p className="text-sm opacity-90 mb-1">إجمالي الكمية</p>
          <p className="text-4xl font-bold">{totalQuantity}</p>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white shadow-xl">
          <AlertTriangle className="w-8 h-8 mb-2 opacity-80" />
          <p className="text-sm opacity-90 mb-1">منتجات قاربت النفاد</p>
          <p className="text-4xl font-bold">{lowStockProducts.length}</p>
        </div>
      </div>

      {/* Add Product Modal */}
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddProduct}
      />
    </div>
  );
};
