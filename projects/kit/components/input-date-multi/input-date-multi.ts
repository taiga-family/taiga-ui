import {TuiCalendar} from '@taiga-ui/core/components/calendar';
import {TuiInputChip} from '@taiga-ui/kit/components/input-chip';

import {TuiInputDateMultiDirective} from './input-date-multi.directive';

export const TuiInputDateMulti = [
    TuiInputDateMultiDirective,
    TuiCalendar,
    ...TuiInputChip,
] as const;
