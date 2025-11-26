import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core/components/textfield';
import {TuiDropdownContent} from '@taiga-ui/core/portals';
import {TuiCalendarRange} from '@taiga-ui/kit/components/calendar-range';

import {TuiInputDateRangeDirective} from './input-date-range.directive';

export const TuiInputDateRange = [
    TuiInputDateRangeDirective,
    TuiCalendarRange,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
    TuiDropdownContent,
] as const;
