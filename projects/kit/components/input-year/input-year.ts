import {TuiCalendarYear} from '@taiga-ui/core/components/calendar';

import {TuiInputYearDirective} from './input-year.directive';

export const TuiInputYear = [TuiInputYearDirective, TuiCalendarYear] as const;
