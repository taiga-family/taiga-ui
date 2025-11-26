import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core/components/textfield';
import {TuiDropdownContent} from '@taiga-ui/core/portals';
import {TuiCalendarMonth} from '@taiga-ui/kit/components/calendar-month';

import {TuiInputMonthRangeDirective} from './input-month-range.directive';

export const TuiInputMonthRange = [
    TuiInputMonthRangeDirective,
    TuiCalendarMonth,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
    TuiDropdownContent,
] as const;
