import {TuiYearLike} from './year-like';

/**
 * Optionally has year and/or month
 */
export interface TuiMonthLike extends TuiYearLike {
    readonly month?: number;
}
