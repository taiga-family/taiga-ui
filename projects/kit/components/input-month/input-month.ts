import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core/components/textfield';
import {TuiDropdownContent} from '@taiga-ui/core/portals';
import {TuiCalendarMonth} from '@taiga-ui/kit/components/calendar-month';

import {TuiInputMonthComponent} from './input-month.component';
import {TuiInputMonthDirective} from './input-month.directive';

export const TuiInputMonth = [
    TuiInputMonthComponent,
    TuiInputMonthDirective,
    TuiCalendarMonth,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
    TuiDropdownContent,
] as const;
