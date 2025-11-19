import { useState } from 'react';
import { Modal } from '../common/Modal';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { useTranslation } from 'react-i18next';

interface AddCustomerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (customer: any) => void;
}

export const AddCustomerModal = ({ isOpen, onClose, onSave }: AddCustomerModalProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: Date.now(),
      balance: 0,
    });
    setFormData({ name: '', phone: '', email: '', address: '' });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t('addCustomer')}
      size="md"
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            {t('cancel')}
          </Button>
          <Button variant="primary" type="submit" onClick={() => handleSubmit({} as React.FormEvent)}>
            {t('save')}
          </Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label={t('customerName')}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="أدخل اسم العميل"
        />

        <Input
          label={t('phone')}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="777XXXXXX"
          type="tel"
        />

        <Input
          label={t('email')}
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@email.com"
          type="email"
        />

        <Input
          label={t('address')}
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="العنوان الكامل"
        />
      </form>
    </Modal>
  );
};
