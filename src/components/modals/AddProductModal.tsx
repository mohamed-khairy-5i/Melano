import { useState } from 'react';
import { Modal } from '../common/Modal';
import { Input } from '../common/Input';
import { Select } from '../common/Select';
import { Button } from '../common/Button';
import { useTranslation } from 'react-i18next';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: any) => void;
}

export const AddProductModal = ({ isOpen, onClose, onSave }: AddProductModalProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    category: 'إلكترونيات',
    quantity: '',
    minQuantity: '',
    purchasePrice: '',
    sellingPrice: '',
    supplier: 'مورد A',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: Date.now(),
      quantity: Number(formData.quantity),
      minQuantity: Number(formData.minQuantity),
      purchasePrice: Number(formData.purchasePrice),
      sellingPrice: Number(formData.sellingPrice),
    });
    setFormData({
      code: '',
      name: '',
      category: 'إلكترونيات',
      quantity: '',
      minQuantity: '',
      purchasePrice: '',
      sellingPrice: '',
      supplier: 'مورد A',
    });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t('addProduct')}
      size="lg"
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
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label={t('productCode')}
          name="code"
          value={formData.code}
          onChange={handleChange}
          required
          placeholder="PRD001"
        />

        <Input
          label={t('productName')}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="اسم المنتج"
        />

        <Select
          label={t('category')}
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          options={[
            { value: 'إلكترونيات', label: 'إلكترونيات' },
            { value: 'ملحقات', label: 'ملحقات' },
            { value: 'أجهزة', label: 'أجهزة' },
            { value: 'قطع غيار', label: 'قطع غيار' },
          ]}
        />

        <Select
          label={t('supplier')}
          name="supplier"
          value={formData.supplier}
          onChange={handleChange}
          required
          options={[
            { value: 'مورد A', label: 'مورد A' },
            { value: 'مورد B', label: 'مورد B' },
            { value: 'مورد C', label: 'مورد C' },
          ]}
        />

        <Input
          label={t('quantity')}
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
          placeholder="0"
          type="number"
          min="0"
        />

        <Input
          label={t('minQuantity')}
          name="minQuantity"
          value={formData.minQuantity}
          onChange={handleChange}
          required
          placeholder="0"
          type="number"
          min="0"
        />

        <Input
          label={t('purchasePrice')}
          name="purchasePrice"
          value={formData.purchasePrice}
          onChange={handleChange}
          required
          placeholder="0"
          type="number"
          min="0"
        />

        <Input
          label={t('sellingPrice')}
          name="sellingPrice"
          value={formData.sellingPrice}
          onChange={handleChange}
          required
          placeholder="0"
          type="number"
          min="0"
        />
      </form>
    </Modal>
  );
};
