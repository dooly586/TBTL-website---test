import React from 'react';
import ContactForm from '../forms/ContactForm';

const CallToActionSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            궁금한 점이 있으신가요?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            TBTL의 전문가가 비즈니스 성장을 위한 최적의 솔루션을 제안해 드립니다. 지금 바로 문의하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">문의하기</h3>
            <ContactForm />
          </div>
          <div className="space-y-8">
             <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">직접 연락하기</h3>
                <div className="space-y-4 text-gray-700">
                    <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <a href="mailto:contact@tbtl.com" className="hover:text-blue-600">contact@tbtl.com</a>
                    </p>
                    <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        <a href="tel:+82-2-1234-5678" className="hover:text-blue-600">+82-2-1234-5678</a>
                    </p>
                </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">영업 시간</h3>
                <p className="text-gray-700">월요일 - 금요일</p>
                <p className="text-gray-600">오전 9:00 - 오후 6:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
