import {InjectionToken} from '@angular/core';
import type {TuiDay, TuiDayRange, TuiTime, TuiValueTransformer} from '@taiga-ui/cdk';

// TODO: Refactor to use `TuiValueTransformer` and add ability to provide it for all controls

/**
 * Control value transformer of TuiDay to custom value format for InputDate* components
 */
export const TUI_DATE_VALUE_TRANSFORMER = new InjectionToken<
    TuiValueTransformer<TuiDay | null>
>('[TUI_DATE_VALUE_TRANSFORMER]');

/**
 * Control value transformer for InputDateRange component
 */
export const TUI_DATE_RANGE_VALUE_TRANSFORMER = new InjectionToken<
    TuiValueTransformer<TuiDayRange | null>
>('[TUI_DATE_RANGE_VALUE_TRANSFORMER]');

/**
 * Control value transformer for InputDateTime component
 */
export const TUI_DATE_TIME_VALUE_TRANSFORMER = new InjectionToken<
    TuiValueTransformer<[TuiDay | null, TuiTime | null]>
>('[TUI_DATE_TIME_VALUE_TRANSFORMER]');
