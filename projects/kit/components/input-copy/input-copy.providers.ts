import {forwardRef, Provider} from '@angular/core';
import {AbstractTuiControl, TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk';
import {TUI_VALUE_ACCESSOR_PROVIDER} from '@taiga-ui/kit/providers';

import {TuiInputCopyComponent} from './input-copy.component';

export const TUI_INPUT_COPY_PROVIDERS: Provider[] = [
    TUI_VALUE_ACCESSOR_PROVIDER,
    {
        provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
        useExisting: forwardRef(() => TuiInputCopyComponent),
    },
    {
        provide: AbstractTuiControl,
        useExisting: forwardRef(() => TuiInputCopyComponent),
    },
];
