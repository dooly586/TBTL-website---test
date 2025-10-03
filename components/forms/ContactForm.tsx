import React, { useState } from 'react';
import type { ContactFormData } from '../../types';
import Button from '../common/Button';

const validateEmail = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = '이름을 입력해주세요.';
    if (!formData.email.trim()) newErrors.email = '이메일을 입력해주세요.';
    else if (!validateEmail(formData.email)) newErrors.email = '유효한 이메일 형식이 아닙니다.';
    if (!formData.message.trim()) newErrors.message = '문의 내용을 입력해주세요.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');
    setFeedbackMessage('');

    // In a real application, you would send this data to a backend API.
    // e.g. using fetch('/api/contact', { method: 'POST', ... })
    // Here, we simulate the API call.
    try {
      // Simulating network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // This is a mock response. A real backend would handle the submission.
      // throw new Error("Simulated server error"); // Uncomment to test error case
      
      console.log('Form data submitted:', formData);
      setStatus('success');
      setFeedbackMessage('문의가 성공적으로 접수되었습니다. 곧 연락드리겠습니다.');
      setFormData({ name: '', email: '', phone: '', message: '' });

    } catch (error) {
      setStatus('error');
      setFeedbackMessage('문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      console.error('Submission failed:', error);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition";
  const errorClass = "text-red-500 text-sm mt-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름 <span className="text-red-500">*</span></label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={inputClass} required />
        {errors.name && <p className={errorClass}>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">이메일 <span className="text-red-500">*</span></label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} required />
        {errors.email && <p className={errorClass}>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">연락처 (선택)</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">문의 내용 <span className="text-red-500">*</span></label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className={inputClass} required></textarea>
        {errors.message && <p className={errorClass}>{errors.message}</p>}
      </div>
      <div>
        <Button type="submit" size="lg" className="w-full" disabled={status === 'loading'}>
          {status === 'loading' ? '전송 중...' : '문의하기'}
        </Button>
      </div>
      {feedbackMessage && (
        <div className={`p-4 rounded-md text-center ${status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {feedbackMessage}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
