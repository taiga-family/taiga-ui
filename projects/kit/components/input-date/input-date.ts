import {TuiCalendar} from '@taiga-ui/core/components/calendar';

import {TuiInputDateComponent} from './input-date.component';
import {TuiInputDateDirective} from './input-date.directive';
import {TuiInputDateValidator} from './input-date.validator';

export const TuiInputDate = [
    TuiInputDateDirective,
    TuiInputDateComponent,
    TuiInputDateValidator,
    TuiCalendar,
] as const;
