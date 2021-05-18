import {forwardRef} from '@angular/core';
import {TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk';
import {TUI_DATA_LIST_HOST} from '@taiga-ui/core';
import {
    FIXED_DROPDOWN_CONTROLLER_PROVIDER,
    TUI_VALUE_ACCESSOR_PROVIDER,
} from '@taiga-ui/kit/providers';
import {TuiInputComponent} from './input.component';

export const TUI_INPUT_PROVIDERS = [
    TUI_VALUE_ACCESSOR_PROVIDER,
    FIXED_DROPDOWN_CONTROLLER_PROVIDER,
    {
        provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
        useExisting: forwardRef(() => TuiInputComponent),
    },
    {
        provide: TUI_DATA_LIST_HOST,
        useExisting: forwardRef(() => TuiInputComponent),
    },
];
