import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppRoute } from '@/common/enums/enums.js';

import { LayoutContainer } from './Components/layout-container.jsx';

const Visits = lazy(() =>
  import('./Components/visits.js').then((module) => {
    return {
      ...module,
      default: module.Visits,
    };
  }),
);
const Changes = lazy(() =>
  import('./Components/changes.js').then((module) => {
    return {
      ...module,
      default: module.Changes,
    };
  }),
);
const CashDesk = lazy(() =>
  import('./Components/cash-desk.js').then((module) => {
    return {
      ...module,
      default: module.CashDesk,
    };
  }),
);
const Dashboard = lazy(() =>
  import('./Components/dashboard.js').then((module) => {
    return {
      ...module,
      default: module.Dashboard,
    };
  }),
);
const App: React.FC = () => {
  return (
    <Routes>
      <Route path={AppRoute.ROOT} element={<LayoutContainer />}>
        <Route path={AppRoute.VISITS} element={<Visits />} />
        <Route path={AppRoute.CHANGES} element={<Changes />} />
        <Route path={AppRoute.CASHDESK} element={<CashDesk />} />
        <Route path={AppRoute.DASHBOARD} element={<Dashboard />} />
      </Route>

      <Route path="*" element={<h1>Something went wrong</h1>}></Route>
    </Routes>
  );
};

export { App };
