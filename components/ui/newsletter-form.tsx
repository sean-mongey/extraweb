'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { X } from 'react-feather';

interface NewsletterFormData {
  firstName: string;
  lastName: string;
  email: string;
  preferredTitle: string;
  customTitle?: string;
  phone?: string;
  company?: string;
}

interface NewsletterFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewsletterForm({ isOpen, onClose }: NewsletterFormProps) {
  const t = useTranslations('newsletter');
  const locale = useLocale();
  const [formData, setFormData] = useState<NewsletterFormData>({
    firstName: '',
    lastName: '',
    email: '',
    preferredTitle: '',
    customTitle: '',
    phone: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'duplicate'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof NewsletterFormData, string>>>({});

  // Power Automate webhook URL - replace with your actual webhook URL
  const POWER_AUTOMATE_WEBHOOK_URL = process.env.NEXT_PUBLIC_POWER_AUTOMATE_WEBHOOK_URL || '';

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof NewsletterFormData, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = t('errors.firstNameRequired');
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = t('errors.lastNameRequired');
    }
    if (!formData.email.trim()) {
      newErrors.email = t('errors.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('errors.emailInvalid');
    }
    if (!formData.preferredTitle) {
      newErrors.preferredTitle = t('errors.preferredTitleRequired');
    }
    if (formData.preferredTitle === 'other' && !formData.customTitle?.trim()) {
      newErrors.customTitle = t('errors.customTitleRequired');
    }
    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = t('errors.phoneInvalid');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send data to Power Automate webhook
      const response = await fetch(POWER_AUTOMATE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
          body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          preferredTitle: formData.preferredTitle === 'other' ? formData.customTitle || '' : formData.preferredTitle,
          phone: formData.phone || '',
          company: formData.company || '',
          language: locale,
          timestamp: new Date().toISOString(),
        }),
      });

      let responseData: any = null;
      try {
        const text = await response.text();
        responseData = text ? JSON.parse(text) : null;
      } catch {
        // Response might not be JSON, that's okay
      }
      
      if (response.ok && responseData?.success !== false) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            preferredTitle: '',
            customTitle: '',
            phone: '',
            company: '',
          });
          setSubmitStatus('idle');
          onClose();
        }, 2000);
      } else if (response.status === 409 || responseData?.duplicate) {
        // Duplicate email detected
        setSubmitStatus('duplicate');
        setErrors({ email: t('errors.emailDuplicate') });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting newsletter form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof NewsletterFormData, value: string) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      // Clear customTitle if preferredTitle changes away from "other"
      if (field === 'preferredTitle' && value !== 'other') {
        updated.customTitle = '';
      }
      return updated;
    });
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
    // Clear customTitle error if preferredTitle changes away from "other"
    if (field === 'preferredTitle' && value !== 'other' && errors.customTitle) {
      setErrors(prev => ({ ...prev, customTitle: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50" onClick={onClose}>
      <div 
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{t('formTitle')}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label={t('close')}
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
              {t('successMessage')}
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
              {t('errorMessage')}
            </div>
          )}

          {submitStatus === 'duplicate' && (
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-md">
              {t('duplicateMessage')}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                {t('firstName')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
                className={`w-full px-4 py-2 border rounded-md text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={t('firstNamePlaceholder')}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                {t('lastName')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
                className={`w-full px-4 py-2 border rounded-md text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={t('lastNamePlaceholder')}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="preferredTitle" className="block text-sm font-medium text-gray-700 mb-1">
              {t('preferredTitle')} <span className="text-red-500">*</span>
            </label>
            <select
              id="preferredTitle"
              value={formData.preferredTitle}
              onChange={(e) => handleChange('preferredTitle', e.target.value)}
              className={`w-full px-4 py-2 border rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.preferredTitle ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">{t('preferredTitlePlaceholder')}</option>
              <option value="Mr">{t('titleOptions.mr')}</option>
              <option value="Mrs">{t('titleOptions.mrs')}</option>
              <option value="Miss">{t('titleOptions.miss')}</option>
              <option value="Ms">{t('titleOptions.ms')}</option>
              <option value="Dr">{t('titleOptions.dr')}</option>
              <option value="Prof">{t('titleOptions.prof')}</option>
              <option value="Mx">{t('titleOptions.mx')}</option>
              <option value="other">{t('titleOptions.other')}</option>
            </select>
            {errors.preferredTitle && (
              <p className="mt-1 text-sm text-red-500">{errors.preferredTitle}</p>
            )}
          </div>

          {formData.preferredTitle === 'other' && (
            <div>
              <label htmlFor="customTitle" className="block text-sm font-medium text-gray-700 mb-1">
                {t('customTitle')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="customTitle"
                value={formData.customTitle || ''}
                onChange={(e) => handleChange('customTitle', e.target.value)}
                className={`w-full px-4 py-2 border rounded-md text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.customTitle ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={t('customTitlePlaceholder')}
              />
              {errors.customTitle && (
                <p className="mt-1 text-sm text-red-500">{errors.customTitle}</p>
              )}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              {t('email')} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`w-full px-4 py-2 border rounded-md text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder={t('emailPlaceholder')}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              {t('phone')} <span className="text-gray-500 text-xs">({t('optional')})</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
                className={`w-full px-4 py-2 border rounded-md text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={t('phonePlaceholder')}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              {t('company')} <span className="text-gray-500 text-xs">({t('optional')})</span>
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t('companyPlaceholder')}
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              disabled={isSubmitting}
            >
              {t('cancel')}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t('submitting') : t('submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

