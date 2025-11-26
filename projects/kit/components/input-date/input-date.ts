import {TuiCalendar} from '@taiga-ui/core/components/calendar';
import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core/components/textfield';
import {TuiDropdownContent} from '@taiga-ui/core/portals';

import {TuiInputDateComponent} from './input-date.component';
import {TuiInputDateDirective} from './input-date.directive';

export const TuiInputDate = [
    TuiInputDateDirective,
    TuiInputDateComponent,
    TuiCalendar,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
    TuiDropdownContent,
] as const;
