import CashDesk from '../../img/icons/cash-desk.svg';
import Changes from '../../img/icons/changes.svg';
import CurrentShift from '../../img/icons/current-shift.svg';
import Dashboard from '../../img/icons/dashboard.svg';
import Visits from '../../img/icons/visits.svg';

const AppRoute = {
  ROOT: '/',
  VISITS: '/visits',
  CHANGES: '/changes',
  CASHDESK: '/cash-desk',
  DASHBOARD: '/dashboard',
} as const;

const icons = {
  [AppRoute.ROOT]: CurrentShift,
  [AppRoute.VISITS]: Visits,
  [AppRoute.CHANGES]: Changes,
  [AppRoute.CASHDESK]: CashDesk,
  [AppRoute.DASHBOARD]: Dashboard,
};

export { AppRoute, icons };
