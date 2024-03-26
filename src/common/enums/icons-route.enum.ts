import CashBox from '@/assets/img/icons/cashbox-icon.svg';
import CurrentShift from '@/assets/img/icons/current-shift-icon.svg';
import Dashboard from '@/assets/img/icons/dashboard-icon.svg';
import Shifts from '@/assets/img/icons/shifts-icon-icon.svg';
import Visits from '@/assets/img/icons/visits-icon.svg';
import { AppRoute } from '@/common/enums/enums.js';

const icons: Record<string, string> = {
  [AppRoute.ROOT]: Dashboard,
  [AppRoute.VISITS]: Visits,
  [AppRoute.SHIFTS]: Shifts,
  [AppRoute.CASHBOX]: CashBox,
  [AppRoute.CURRENTSHIFT]: CurrentShift,
};

export { icons };
