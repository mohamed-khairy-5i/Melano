import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../common/Button';
import { Save } from 'lucide-react';

interface AddCustomerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (customer: any) => void;
}

export const AddCustomerModal = ({ isOpen, onClose, onSave }: AddCustomerModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    balance: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: Date.now(),
      ...formData,
    });
    setFormData({ name: '', phone: '', email: '', address: '', balance: 0 });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'balance' ? parseFloat(value) || 0 : value,
    }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="إضافة عميل جديد" size="md">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            اسم العميل *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-bg text-white placeholder-dark-muted focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="أدخل اسم العميل"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            رقم الهاتف *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-bg text-white placeholder-dark-muted focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="777XXXXXX"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-bg text-white placeholder-dark-muted focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="example@email.com"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            العنوان
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-bg text-white placeholder-dark-muted focus:outline-none focus:border-blue-500 transition-colors resize-none"
            placeholder="العنوان الكامل"
          />
        </div>

        {/* Balance */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            الرصيد الافتتاحي
          </label>
          <input
            type="number"
            name="balance"
            value={formData.balance}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-bg text-white placeholder-dark-muted focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="0"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-end pt-4">
          <Button type="button" variant="secondary" onClick={onClose}>
            إلغاء
          </Button>
          <Button type="submit" variant="primary" icon={Save}>
            حفظ
          </Button>
        </div>
      </form>
    </Modal>
  );
};
