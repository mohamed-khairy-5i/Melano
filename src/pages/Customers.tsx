import { useState } from 'react';
import { Eye, Pencil, Trash2, Plus } from 'lucide-react';

interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  balance: number;
}

export const Customers = () => {
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: '1',
      name: 'عميل متجر مناير الذهبي',
      phone: '781707707',
      email: '',
      balance: 0
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    balance: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCustomer: Customer = {
      id: Date.now().toString(),
      ...formData
    };
    setCustomers([...customers, newCustomer]);
    setFormData({ name: '', phone: '', email: '', balance: 0 });
    setShowModal(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('هل أنت متأكد من حذف هذا العميل؟')) {
      setCustomers(customers.filter(c => c.id !== id));
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">العملاء</h1>
        <button 
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-black text-white rounded-lg flex items-center gap-2 hover:bg-gray-900 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>إضافة عميل</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-[#27272a] rounded-2xl border border-[#3f3f46] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#3f3f46]">
              <th className="text-right px-6 py-4 text-sm font-semibold text-gray-400">الاسم</th>
              <th className="text-right px-6 py-4 text-sm font-semibold text-gray-400">الهاتف</th>
              <th className="text-right px-6 py-4 text-sm font-semibold text-gray-400">البريد الالكتروني</th>
              <th className="text-right px-6 py-4 text-sm font-semibold text-gray-400">الرصيد</th>
              <th className="text-right px-6 py-4 text-sm font-semibold text-gray-400">حد الائتمان</th>
              <th className="text-center px-6 py-4 text-sm font-semibold text-gray-400">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b border-[#3f3f46] hover:bg-[#2d2d30] transition-colors">
                <td className="px-6 py-4 text-white">{customer.name}</td>
                <td className="px-6 py-4 text-white">{customer.phone}</td>
                <td className="px-6 py-4 text-white">{customer.email || '-'}</td>
                <td className="px-6 py-4 text-white">
                  {customer.balance.toLocaleString()} ر.ي
                </td>
                <td className="px-6 py-4 text-white">0 ريال يمني</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-2 text-blue-500 hover:bg-blue-500/10 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-green-500 hover:bg-green-500/10 rounded-lg transition-colors">
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(customer.id)}
                      className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
          <div className="bg-[#27272a] rounded-2xl p-8 w-full max-w-2xl border border-[#3f3f46]" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-white mb-6">إضافة عميل جديد</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">الاسم</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#18181b] border border-[#3f3f46] rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="أدخل اسم العميل"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-[#18181b] border border-[#3f3f46] rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="أدخل رقم الهاتف"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#18181b] border border-[#3f3f46] rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="أدخل البريد الإلكتروني (اختياري)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">الرصيد الافتتاحي</label>
                <input
                  type="number"
                  value={formData.balance}
                  onChange={(e) => setFormData({ ...formData, balance: parseFloat(e.target.value) || 0 })}
                  className="w-full px-4 py-3 bg-[#18181b] border border-[#3f3f46] rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="0"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  حفظ
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 bg-[#3f3f46] hover:bg-[#52525b] text-white rounded-lg font-medium transition-colors"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
