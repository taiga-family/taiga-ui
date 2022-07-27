import {forwardRef} from '@angular/core';
import {AbstractTuiControl, TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk';
import {TUI_DATA_LIST_HOST, TUI_OPTION_CONTENT} from '@taiga-ui/core';
import {TUI_SELECT_OPTION} from '@taiga-ui/kit/components/select-option';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';

import {TuiSelectComponent} from './select.component';

export const TUI_SELECT_PROVIDERS = [
    {
        provide: AbstractTuiControl,
        useExisting: forwardRef(() => TuiSelectComponent),
    },
    {
        provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
        useExisting: forwardRef(() => TuiSelectComponent),
    },
    {
        provide: TUI_DATA_LIST_HOST,
        useExisting: forwardRef(() => TuiSelectComponent),
    },
    {
        provide: TUI_OPTION_CONTENT,
        useValue: TUI_SELECT_OPTION,
    },
    FIXED_DROPDOWN_CONTROLLER_PROVIDER,
];
