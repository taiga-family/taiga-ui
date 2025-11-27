import {TuiTextfield} from '@taiga-ui/core/components/textfield';
import {TuiCalendarMonth} from '@taiga-ui/kit/components/calendar-month';

import {TuiInputMonthComponent} from './input-month.component';
import {TuiInputMonthDirective} from './input-month.directive';

export const TuiInputMonth = [
    TuiInputMonthComponent,
    TuiInputMonthDirective,
    TuiCalendarMonth,
    ...TuiTextfield,
] as const;
