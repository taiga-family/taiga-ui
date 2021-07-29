import {RANGE_SEPARATOR_CHAR} from '@taiga-ui/cdk/date-time';

/**
 * @internal 'dd.mm.yyyy'.length
 * Used in
 * - {@link TuiInputDateComponent}
 * - {@link TuiInputDateRangeComponent}
 * - {@link TuiInputDateTimeComponent}
 */
export const DATE_FILLER_LENGTH = 10;
export const DATE_RANGE_FILLER_LENGTH =
    2 * DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length;
