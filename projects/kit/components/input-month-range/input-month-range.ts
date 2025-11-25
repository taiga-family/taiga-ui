import {TuiTextfield} from '@taiga-ui/core/components/textfield';
import {TuiCalendarMonth} from '@taiga-ui/kit/components/calendar-month';

import {TuiInputMonthRangeDirective} from './input-month-range.directive';

export const TuiInputMonthRange = [
    TuiInputMonthRangeDirective,
    TuiCalendarMonth,
    TuiTextfield,
] as const;
