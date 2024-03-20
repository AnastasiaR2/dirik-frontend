import { Outlet } from 'react-router-dom';

const MainContent: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <h1>MainContent</h1>
      <Outlet />
    </div>
  );
};

export { MainContent };
