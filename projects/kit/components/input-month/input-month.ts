import {TuiCalendarMonth} from '@taiga-ui/kit/components/calendar-month';

import {TuiInputMonthComponent} from './input-month.component';
import {TuiInputMonthDirective} from './input-month.directive';

export const TuiInputMonth = [
    TuiInputMonthComponent,
    TuiInputMonthDirective,
    TuiCalendarMonth,
] as const;
