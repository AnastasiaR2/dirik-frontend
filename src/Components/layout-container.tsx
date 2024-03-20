import { Suspense } from 'react';

import { MainContent } from './main-content.js';
import { Navigation } from './navigation.js';

const LayoutContainer: React.FC = () => {
  return (
    <div className="layout">
      <Navigation />
      <Suspense
        fallback={
          <div className="loader">
            <div className="circle">
              <div className="dot"></div>
              <div className="outline"></div>
            </div>
            <div className="circle">
              <div className="dot"></div>
              <div className="outline"></div>
            </div>
            <div className="circle">
              <div className="dot"></div>
              <div className="outline"></div>
            </div>
            <div className="circle">
              <div className="dot"></div>
              <div className="outline"></div>
            </div>
          </div>
        }
      >
        <MainContent />
      </Suspense>
    </div>
  );
};

export { LayoutContainer };
