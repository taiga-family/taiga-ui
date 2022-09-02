import type {TuiYearLike} from './year-like';

/**
 * Optionaly has year and/or month
 */
export interface TuiMonthLike extends TuiYearLike {
    readonly month?: number;
}
