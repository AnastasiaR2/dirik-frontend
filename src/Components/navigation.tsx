import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { AppRoute, icons } from '@/common/enums/enums.js';

import Logo from '../img/logo.png';

const menuItems = [
  { route: AppRoute.ROOT, label: 'Поточна зміна' },
  { route: AppRoute.VISITS, label: 'Візити' },
  { route: AppRoute.CHANGES, label: 'Зміни' },
  { route: AppRoute.CASHDESK, label: 'Каса' },
  { route: AppRoute.DASHBOARD, label: 'Дашборд' },
];

const Navigation: React.FC = () => {
  const [focused, setFocused] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    setFocused(location.pathname);
  }, [location]);

  return (
    <div className="nav-box">
      <NavLink className="nav-logo" to={AppRoute.ROOT}>
        <img src={Logo} alt="Logo Dirigible" />
      </NavLink>

      <p className="nav-text">Меню</p>

      <ul className="nav-list">
        {menuItems.map((item) => (
          <li key={item.route} className="nav-item">
            <NavLink
              className={`nav-link ${focused === item.route ? 'focused' : ''}`}
              to={item.route}
            >
              <svg width={25} height={25}>
                <use xlinkHref={`${icons[item.route]}#${item.label}`} />
              </svg>

              <p>{item.label}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Navigation };
