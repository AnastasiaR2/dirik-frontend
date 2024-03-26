import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppRoute } from '@/common/enums/enums.js';
import { Layout } from '@/components/components.js';

const Visits = lazy(() =>
  import('@/components/visits.js').then((module) => ({
    default: module.Visits,
  })),
);
const Shifts = lazy(() =>
  import('@/components/shifts.js').then((module) => ({
    default: module.Shifts,
  })),
);
const CashBox = lazy(() =>
  import('@/components/cashbox.js').then((module) => ({
    default: module.CashBox,
  })),
);
const CurrentShift = lazy(() =>
  import('@/components/current-shift.js').then((module) => ({
    default: module.CurrentShift,
  })),
);
const App: React.FC = () => {
  return (
    <Routes>
      <Route path={AppRoute.ROOT} element={<Layout />}>
        <Route path={AppRoute.CURRENTSHIFT} element={<CurrentShift />} />
        <Route path={AppRoute.VISITS} element={<Visits />} />
        <Route path={AppRoute.SHIFTS} element={<Shifts />} />
        <Route path={AppRoute.CASHBOX} element={<CashBox />} />
      </Route>

      <Route
        path={AppRoute.ANY}
        element={
          <h1>
            Ой! Схоже, сторінка, до якої ви намагаєтеся отримати доступ, не
            існує. Перевірте URL-адресу або поверніться на головну сторінку.
          </h1>
        }
      ></Route>
    </Routes>
  );
};

export { App };
