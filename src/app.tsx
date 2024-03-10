import { Route, Routes } from 'react-router-dom';

import { AppRoute } from '@/common/enums/enums.js';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={AppRoute.ROOT} />
    </Routes>
  );
};

export { App };
