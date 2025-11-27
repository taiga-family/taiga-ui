import {TuiCalendarYear} from '@taiga-ui/core/components/calendar';
import {TuiTextfield} from '@taiga-ui/core/components/textfield';

import {TuiInputYearDirective} from './input-year.directive';

export const TuiInputYear = [
    TuiInputYearDirective,
    TuiCalendarYear,
    ...TuiTextfield,
] as const;
