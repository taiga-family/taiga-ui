import {forwardRef, Provider} from '@angular/core';
import {AbstractTuiControl, TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk';
import {TuiMonthPipe} from '@taiga-ui/core';
import {
    LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER,
    TUI_MONTH_FORMATTER_PROVIDER,
} from '@taiga-ui/kit/providers';

import {TuiInputMonthComponent} from './input-month.component';

export const TUI_INPUT_MONTH_PROVIDERS: Provider[] = [
    {
        provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
        useExisting: forwardRef(() => TuiInputMonthComponent),
    },
    {
        provide: AbstractTuiControl,
        useExisting: forwardRef(() => TuiInputMonthComponent),
    },
    LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER,
    TUI_MONTH_FORMATTER_PROVIDER,
    TuiMonthPipe,
];
