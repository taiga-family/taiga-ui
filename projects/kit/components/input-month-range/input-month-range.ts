import {TuiCalendarMonth} from '@taiga-ui/kit/components/calendar-month';

import {TuiInputMonthRangeDirective} from './input-month-range.directive';

export const TuiInputMonthRange = [
    TuiInputMonthRangeDirective,
    TuiCalendarMonth,
] as const;
