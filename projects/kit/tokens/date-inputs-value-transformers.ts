import {InjectionToken} from '@angular/core';
import {TuiControlValueTransformer, TuiDay, TuiDayRange, TuiTime} from '@taiga-ui/cdk';

export const TUI_DATE_VALUE_TRANSFORMER = new InjectionToken<
    TuiControlValueTransformer<TuiDay | null>
>(
    `[TUI_DATE_VALUE_TRANSFORMER]: Control value transformer of TuiDay to custom value format for InputDate* components`,
);

export const TUI_DATE_RANGE_VALUE_TRANSFORMER = new InjectionToken<
    TuiControlValueTransformer<TuiDayRange | null>
>(
    `[TUI_DATE_RANGE_VALUE_TRANSFORMER]: Control value transformer for InputDateRange component`,
);

export const TUI_DATE_TIME_VALUE_TRANSFORMER = new InjectionToken<
    TuiControlValueTransformer<[TuiDay | null, TuiTime | null]>
>(
    `[TUI_DATE_TIME_VALUE_TRANSFORMER]: Control value transformer for InputDateTime component`,
);
