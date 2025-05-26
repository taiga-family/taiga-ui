import type {TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {TUI_IDENTITY_VALUE_TRANSFORMER} from '@taiga-ui/cdk/classes';
import type {TuiDay, TuiDayRange, TuiTime} from '@taiga-ui/cdk/date-time';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * Control value transformer of TuiDay to custom value format for InputDate* components
 */
export const TUI_DATE_VALUE_TRANSFORMER = tuiCreateToken<
    TuiValueTransformer<TuiDay | null>
>(TUI_IDENTITY_VALUE_TRANSFORMER);

/**
 * Control value transformer for InputDateRange component
 */
export const TUI_DATE_RANGE_VALUE_TRANSFORMER =
    tuiCreateToken<TuiValueTransformer<TuiDayRange | null>>();

/**
 * Control value transformer for InputDateTime component
 */
export const TUI_DATE_TIME_VALUE_TRANSFORMER =
    tuiCreateToken<TuiValueTransformer<[TuiDay, TuiTime | null]>>();

/**
 * Control value transformer for InputTime component
 */
export const TUI_TIME_VALUE_TRANSFORMER =
    tuiCreateToken<TuiValueTransformer<TuiTime | null>>();
