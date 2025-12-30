export type TuiDateMode = 'dd/mm/yyyy' | 'mm/dd/yyyy' | 'yyyy/mm/dd';

/**
 * Optionally has year and/or month and/or day
 */
export interface TuiDayLike extends TuiMonthLike {
    readonly day?: number;
}

/**
 * Optionally has year and/or month
 */
export interface TuiMonthLike extends TuiYearLike {
    readonly month?: number;
}

/**
 * Optionally has year
 */
export interface TuiYearLike {
    readonly year?: number;
}

export interface TuiTimeLike {
    readonly hours?: number;
    readonly minutes?: number;
    readonly ms?: number;
    readonly seconds?: number;
}
