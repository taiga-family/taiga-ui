import {RANGE_SEPARATOR_CHAR} from './date-time';

/**
 * @internal 'yyyy'.length
 */
export const YEAR_FILLER_LENGTH = 4 as const;

/**
 * @internal 'mm/yyyy'.length
 * Used in:
 * - {@link TuiInputMonth}
 * - {@link TuiInputMonthRange}
 */
export const MONTH_FILLER_LENGTH = 7 as const;

/**
 * @internal 'dd/mm/yyyy'.length
 * Used in:
 * - {@link TuiInputDate}
 * - {@link TuiInputDateRange}
 * - {@link TuiInputDateTime}
 */
export const DATE_FILLER_LENGTH = 10 as const;
/**
 * @internal
 * Used in {@link TuiInputDateRange}
 */
export const DATE_RANGE_FILLER_LENGTH =
    2 * DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length;
