import React from 'react';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white -mt-20 pt-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Abstract technology background representing business innovation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
      </div>
      <div className="relative z-10 px-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">비즈니스의 미래를 여는 기술,</span>
          <span className="block text-blue-400 mt-2">TBTL과 함께하세요</span>
        </h1>
        <p className="mt-6 max-w-md mx-auto text-lg text-gray-200 sm:text-xl md:mt-8 md:max-w-3xl">
          TBTL은 혁신적인 기술과 깊이 있는 분석을 통해 귀사의 비즈니스가 마주한 복잡한 문제를 해결하고, 지속 가능한 성장을 지원합니다.
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
            <a href="#contact">
              <Button size="lg">
                상담 신청하기
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;