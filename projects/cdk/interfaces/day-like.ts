import type {TuiMonthLike} from './month-like';

/**
 * Optionally has year and/or month and/or day
 */
export interface TuiDayLike extends TuiMonthLike {
    readonly day?: number;
}
