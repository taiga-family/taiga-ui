/**
 * * DMY - dd.mm.yyyy
 * * MDY - mm.dd.yyyy
 * * YMD - yyyy.mm.dd
 */
export type TuiDateMode = 'DMY' | 'MDY' | 'YMD';
export type TuiTimeMode = 'HH:MM:SS.MSS' | 'HH:MM:SS' | 'HH:MM';

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
