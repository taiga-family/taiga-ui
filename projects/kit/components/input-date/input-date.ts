import {TuiCalendar} from '@taiga-ui/core/components/calendar';
import {TuiTextfield} from '@taiga-ui/core/components/textfield';

import {TuiInputDateComponent} from './input-date.component';
import {TuiInputDateDirective} from './input-date.directive';

export const TuiInputDate = [
    TuiInputDateDirective,
    TuiInputDateComponent,
    TuiCalendar,
    TuiTextfield,
] as const;
