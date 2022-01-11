import {InjectionToken} from '@angular/core';
import {AbstractTuiControlValueTransformer, TuiDay} from '@taiga-ui/cdk';

export const TUI_INPUT_DATE_VALUE_TRANSFORMER = new InjectionToken<
    AbstractTuiControlValueTransformer<TuiDay>
>('Control value transformer for InputDate component');
