import { NavigationMenu } from '@/components/components.js';
import { RouterOutlet } from '@/routes/routes.js';

const App: React.FC = () => {
  return (
    <>
      <NavigationMenu />
      <RouterOutlet />
    </>
  );
};

export { App };
