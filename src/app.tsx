import { RouterOutlet } from '@/components/routing/routing.js';
import { NavigationMenu } from '@/views/views.js';

const App: React.FC = () => {
  return (
    <>
      <NavigationMenu />
      <RouterOutlet />
    </>
  );
};

export { App };
