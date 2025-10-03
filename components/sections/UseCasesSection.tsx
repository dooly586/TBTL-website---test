import React from 'react';

interface UseCaseCardProps {
  imageSrc: string;
  category: string;
  title: string;
  description: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ imageSrc, category, title, description }) => (
  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex-shrink-0">
      <img className="h-48 w-full object-cover" src={imageSrc} alt={`${category} - ${title}`} />
    </div>
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <p className="text-sm font-medium text-blue-600">{category}</p>
        <a href="#" className="block mt-2">
          <p className="text-xl font-semibold text-gray-900">{title}</p>
          <p className="mt-3 text-base text-gray-500">{description}</p>
        </a>
      </div>
    </div>
  </div>
);


const UseCasesSection: React.FC = () => {
    const useCases = [
    {
      imageSrc: 'https://images.unsplash.com/photo-1581092921461-8a28392341d6?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: '제조업',
      title: '생산 공정 최적화',
      description: 'AI 기반 수요 예측 및 실시간 공정 모니터링을 통해 생산 효율 25% 향상 및 불량률 15% 감소를 달성했습니다.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: '금융 서비스',
      title: '이상 거래 탐지 시스템',
      description: '머신러닝을 활용한 실시간 이상 거래 탐지 시스템을 구축하여 금융 사기 피해를 획기적으로 줄였습니다.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1556740738-b6a63e2775d2?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: '리테일',
      title: '개인화 마케팅 자동화',
      description: '고객 행동 데이터 분석을 기반으로 개인화된 상품 추천 및 마케팅 캠페인을 자동화하여 구매 전환율을 30% 높였습니다.',
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            주요 사용 사례
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            다양한 산업 분야에서 TBTL의 솔루션이 어떻게 비즈니스 가치를 창출하고 있는지 확인해보세요.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
          {useCases.map((useCase) => (
             <UseCaseCard key={useCase.title} {...useCase} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;