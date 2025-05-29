import {TuiCalendarRange} from '@taiga-ui/kit/components/calendar-range';

import {TuiInputDateRangeDirective} from './input-date-range.directive';

export const TuiInputDateRange = [TuiInputDateRangeDirective, TuiCalendarRange] as const;
