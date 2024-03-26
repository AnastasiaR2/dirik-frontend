import { NavLink } from 'react-router-dom';

import { icons } from '@/common/enums/enums.js';
import { getValidClassNames } from '@/common/helpers/get-valid-class-names.helper.js';

interface MenuItemProps {
  route: string;
  label: string;
  isFocused: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ route, label, isFocused }) => {
  return (
    <li className="nav-item">
      <NavLink
        className={getValidClassNames(
          'nav-link',
          isFocused === route && 'focused',
        )}
        to={route}
      >
        <svg width={25} height={25}>
          <use xlinkHref={`${icons[route]}#${label}`} />
        </svg>
        <p>{label}</p>
      </NavLink>
    </li>
  );
};

export { MenuItem };
