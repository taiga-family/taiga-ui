import {InjectionToken} from '@angular/core';
import {AbstractTuiControlValueTransformer, TuiDay} from '@taiga-ui/cdk';

export const TUI_DATE_INPUTS_VALUE_TRANSFORMER = new InjectionToken<
    AbstractTuiControlValueTransformer<TuiDay | null>
>('Control value transformer of TuiDay to custom value format for InputDate* components');
