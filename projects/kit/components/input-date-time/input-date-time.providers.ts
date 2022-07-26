import {forwardRef, Optional, Self} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiControlValueTransformer,
    TuiDay,
    TuiTime,
} from '@taiga-ui/cdk';
import {LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {
    TUI_CALENDAR_DATA_STREAM,
    TUI_DATE_TIME_VALUE_TRANSFORMER,
} from '@taiga-ui/kit/tokens';
import {tuiReplayedValueChangesFactory} from '@taiga-ui/kit/utils/miscellaneous';

import {TuiInputDateTimeComponent} from './input-date-time.component';

export const TUI_INPUT_DATE_TIME_PROVIDERS = [
    {
        provide: AbstractTuiControl,
        useExisting: forwardRef(() => TuiInputDateTimeComponent),
    },
    {
        provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
        useExisting: forwardRef(() => TuiInputDateTimeComponent),
    },
    {
        provide: TUI_CALENDAR_DATA_STREAM,
        deps: [
            [new Optional(), new Self(), NgControl],
            [new Optional(), forwardRef(() => TUI_DATE_TIME_VALUE_TRANSFORMER)],
        ],
        useFactory: <T extends [TuiDay | null, TuiTime | null]>(
            control: NgControl | null,
            valueTransformer: TuiControlValueTransformer<T>,
        ) => tuiReplayedValueChangesFactory(control, valueTransformer),
    },
    LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER,
];
