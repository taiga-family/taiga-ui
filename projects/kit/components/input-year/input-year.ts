import {TuiCalendarYear} from '@taiga-ui/core/components/calendar';
import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core/components/textfield';
import {TuiDropdownContent} from '@taiga-ui/core/portals/dropdown';

import {TuiInputYearDirective} from './input-year.directive';

export const TuiInputYear = [
    TuiInputYearDirective,
    TuiCalendarYear,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
    TuiDropdownContent,
] as const;
