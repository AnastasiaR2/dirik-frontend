import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Logo from '@/assets/img/icons/logo-icon.svg';
import { AppRoute } from '@/common/enums/enums.js';
import { MenuItem } from '@/components/components.js';

const menuItems = [
  { route: AppRoute.ROOT, label: 'Дешборд' },
  { route: AppRoute.CURRENTSHIFT, label: 'Поточна зміна' },
  { route: AppRoute.VISITS, label: 'Візити' },
  { route: AppRoute.SHIFTS, label: 'Зміни' },
  { route: AppRoute.CASHBOX, label: 'Каса' },
];

const Navigation: React.FC = () => {
  const [isFocused, setisFocused] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    setisFocused(location.pathname);
  }, [location]);

  return (
    <div className="nav-box">
      <NavLink className="nav-logo" to={AppRoute.ROOT}>
        <svg width={65} height={65}>
          <use xlinkHref={`${Logo}#logo`} />
        </svg>
        <p className="nav-logo-text">Dirigible</p>
      </NavLink>

      <p className="nav-text">Меню</p>

      <ul className="nav-list">
        {menuItems.map((item) => (
          <MenuItem
            key={item.route}
            route={item.route}
            label={item.label}
            isFocused={isFocused}
          />
        ))}
      </ul>
    </div>
  );
};

export { Navigation };
