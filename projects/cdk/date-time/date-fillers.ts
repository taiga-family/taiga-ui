import {TUI_RANGE_SEPARATOR_CHAR} from './date-time';

/**
 * @internal 'dd.mm.yyyy'.length
 * Used in:
 * - {@link TuiInputDateComponent}
 * - {@link TuiInputDateRangeComponent}
 * - {@link TuiInputDateTimeComponent}
 */
export const TUI_DATE_FILLER_LENGTH = 10;

/**
 * @deprecated: use {@link TUI_DATE_FILLER_LENGTH}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DATE_FILLER_LENGTH = TUI_DATE_FILLER_LENGTH;

/**
 * @internal
 * Used in {@link TuiInputDateRangeComponent}
 */
export const TUI_DATE_RANGE_FILLER_LENGTH =
    2 * TUI_DATE_FILLER_LENGTH + TUI_RANGE_SEPARATOR_CHAR.length;

/**
 * @deprecated: use {@link TUI_DATE_RANGE_FILLER_LENGTH}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DATE_RANGE_FILLER_LENGTH = TUI_DATE_RANGE_FILLER_LENGTH;
