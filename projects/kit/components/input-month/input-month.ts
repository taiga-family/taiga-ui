import {TuiCalendarMonth} from '@taiga-ui/kit/components/calendar-month';

import {TuiInputMonthDirective} from './input-month.directive';
import {TuiNativeMonthPicker} from './native-month-picker/native-month-picker.component';

export const TuiInputMonth = [
    TuiInputMonthDirective,
    TuiCalendarMonth,
    TuiNativeMonthPicker,
] as const;
