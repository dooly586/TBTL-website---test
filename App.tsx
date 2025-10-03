import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HeroSection from './components/sections/HeroSection';
import ProductIntroSection from './components/sections/ProductIntroSection';
import UseCasesSection from './components/sections/UseCasesSection';
import CallToActionSection from './components/sections/CallToActionSection';
import DownloadSection from './components/sections/DownloadSection';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <HeroSection />
        <ProductIntroSection />
        <UseCasesSection />
        <CallToActionSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
