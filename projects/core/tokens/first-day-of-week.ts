import {TuiDayOfWeek} from '@taiga-ui/cdk/date-time';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * The first day of the week index
 */
export const TUI_FIRST_DAY_OF_WEEK = tuiCreateToken<0 | 1 | 2 | 3 | 4 | 5 | 6>(
    TuiDayOfWeek.Monday,
);
