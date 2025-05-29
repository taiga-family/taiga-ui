import {TuiCalendar} from '@taiga-ui/core/components/calendar';

import {TuiInputDateComponent} from './input-date.component';
import {TuiInputDateDirective} from './input-date.directive';

export const TuiInputDate = [
    TuiInputDateDirective,
    TuiInputDateComponent,
    TuiCalendar,
] as const;
