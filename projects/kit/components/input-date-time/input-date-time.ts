import {TuiCalendar} from '@taiga-ui/core/components/calendar';

import {TuiInputDateTimeComponent} from './input-date-time.component';
import {TuiInputDateTimeDirective} from './input-date-time.directive';

export const TuiInputDateTime = [
    TuiInputDateTimeDirective,
    TuiInputDateTimeComponent,
    TuiCalendar,
] as const;
