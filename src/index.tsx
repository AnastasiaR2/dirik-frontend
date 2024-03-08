import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppRoute } from '@/common/enums/enums.js';
import { Dashboard } from '@/pages/dashboard/dashboard.js';
import { RouterProvider } from '@/routes/routes.js';

import { App } from './app.jsx';

createRoot(document.querySelector('#root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider
      routes={[
        {
          path: AppRoute.ROOT,
          element: <App />,
          children: [
            {
              path: AppRoute.ROOT,
              element: <Dashboard />,
            },
          ],
        },
      ]}
    />
  </StrictMode>,
);
