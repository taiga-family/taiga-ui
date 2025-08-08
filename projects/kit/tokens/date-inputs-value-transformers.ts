import {InjectionToken} from '@angular/core';
import {
    TUI_IDENTITY_VALUE_TRANSFORMER,
    type TuiValueTransformer,
} from '@taiga-ui/cdk/classes';
import {type TuiDay, type TuiDayRange, type TuiTime} from '@taiga-ui/cdk/date-time';

/**
 * Control value transformer of TuiDay to custom value format for InputDate* components
 */
export const TUI_DATE_VALUE_TRANSFORMER = new InjectionToken<
    TuiValueTransformer<TuiDay | null>
>(ngDevMode ? 'TUI_DATE_VALUE_TRANSFORMER' : '', {
    factory: () => TUI_IDENTITY_VALUE_TRANSFORMER,
});

/**
 * Control value transformer for InputDateRange component
 */
export const TUI_DATE_RANGE_VALUE_TRANSFORMER = new InjectionToken<
    TuiValueTransformer<TuiDayRange | null>
>(ngDevMode ? 'TUI_DATE_RANGE_VALUE_TRANSFORMER' : '');

/**
 * Control value transformer for InputDateTime component
 */
export const TUI_DATE_TIME_VALUE_TRANSFORMER = new InjectionToken<
    TuiValueTransformer<[TuiDay, TuiTime | null]>
>(ngDevMode ? 'TUI_DATE_TIME_VALUE_TRANSFORMER' : '');

/**
 * Control value transformer for InputTime component
 */
export const TUI_TIME_VALUE_TRANSFORMER = new InjectionToken<
    TuiValueTransformer<TuiTime | null>
>(ngDevMode ? 'TUI_TIME_VALUE_TRANSFORMER' : '');
