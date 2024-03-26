import CircularProgress from '@mui/material/CircularProgress/CircularProgress.js';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Navigation } from '@/components/components.js';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Navigation />
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export { Layout };
