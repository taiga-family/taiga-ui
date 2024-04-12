import {tuiCreateToken, TuiDayOfWeek} from '@taiga-ui/cdk';

/**
 * The first day of the week index
 */
export const TUI_FIRST_DAY_OF_WEEK = tuiCreateToken<0 | 1 | 2 | 3 | 4 | 5 | 6>(
    TuiDayOfWeek.Monday,
);
