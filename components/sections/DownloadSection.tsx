import React from 'react';
import Button from '../common/Button';

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          더 자세한 정보가 필요하신가요?
        </h2>
        <p className="mt-4 text-lg text-blue-200">
          TBTL의 모든 제품과 서비스에 대한 상세한 정보를 담은 브로슈어를 다운로드하여 확인해보세요.
        </p>
        <div className="mt-8">
          <a href="/tbtl_brochure.pdf" download="TBTL_Brochure.pdf">
            <Button variant="secondary" size="lg">
              브로슈어 다운로드
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
