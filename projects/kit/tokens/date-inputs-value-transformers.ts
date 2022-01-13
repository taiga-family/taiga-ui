import {InjectionToken} from '@angular/core';
import {AbstractTuiControlValueTransformer, TuiDay, TuiDayRange} from '@taiga-ui/cdk';

export const TUI_DATE_VALUE_TRANSFORMER = new InjectionToken<
    AbstractTuiControlValueTransformer<TuiDay | null>
>('Control value transformer of TuiDay to custom value format for InputDate* components');

export const TUI_DATE_RANGE_VALUE_TRANSFORMER = new InjectionToken<
    AbstractTuiControlValueTransformer<TuiDayRange | null>
>('Control value transformer for InputDateRange component');
