import {forwardRef, Provider} from '@angular/core';
import {AbstractTuiControl, TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk';
import {TuiMonthPipe} from '@taiga-ui/core';
import {
    LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER,
    TUI_MONTH_FORMATTER_PROVIDER,
} from '@taiga-ui/kit/providers';

import {TuiInputMonthRangeComponent} from './input-month-range.component';

export const TUI_INPUT_MONTH_RANGE_PROVIDERS: Provider[] = [
    {
        provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
        useExisting: forwardRef(() => TuiInputMonthRangeComponent),
    },
    {
        provide: AbstractTuiControl,
        useExisting: forwardRef(() => TuiInputMonthRangeComponent),
    },
    LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER,
    TUI_MONTH_FORMATTER_PROVIDER,
    TuiMonthPipe,
];
