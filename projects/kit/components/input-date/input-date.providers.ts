import {forwardRef, Optional, Self} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiControlValueTransformer,
    TuiDay,
} from '@taiga-ui/cdk';
import {LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {TUI_CALENDAR_DATA_STREAM, TUI_DATE_VALUE_TRANSFORMER} from '@taiga-ui/kit/tokens';
import {TuiReplayControlValueChangesFactory} from '@taiga-ui/kit/utils/miscellaneous';
import {Observable} from 'rxjs';

import {TuiInputDateComponent} from './input-date.component';

// TODO: 3.0 remove in ivy compilation
export const DATE_STREAM_FACTORY = <T extends TuiDay>(
    control: NgControl | null,
    valueTransformer: TuiControlValueTransformer<T>,
): Observable<T | null> | null =>
    TuiReplayControlValueChangesFactory<T>(control, valueTransformer);

export const TUI_INPUT_DATE_PROVIDERS = [
    {
        provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
        useExisting: forwardRef(() => TuiInputDateComponent),
    },
    {
        provide: TUI_CALENDAR_DATA_STREAM,
        deps: [
            [new Optional(), new Self(), NgControl],
            [new Optional(), TUI_DATE_VALUE_TRANSFORMER],
        ],
        useFactory: DATE_STREAM_FACTORY,
    },
    {
        provide: AbstractTuiControl,
        useExisting: forwardRef(() => TuiInputDateComponent),
    },
    LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER,
];
