import {MAX_MONTH, MAX_YEAR, MIN_DAY, MIN_MONTH, MIN_YEAR} from './date-time';
import {TuiDay} from './day';

export const TUI_FIRST_DAY = new TuiDay(MIN_YEAR, MIN_MONTH, MIN_DAY);

export const TUI_LAST_DAY = new TuiDay(MAX_YEAR, MAX_MONTH, 31);
