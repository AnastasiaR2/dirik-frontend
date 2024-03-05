import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider } from '@/components/routing/routing.js';
import { AppRoute } from '@/libs/enums/enums.js';
import { Dashboard } from '@/pages/dashboard/dashboard.js';

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
