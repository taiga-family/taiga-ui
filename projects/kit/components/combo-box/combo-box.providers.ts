import {forwardRef} from '@angular/core';
import {AbstractTuiControl, TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk';
import {TUI_DATA_LIST_HOST, TUI_OPTION_CONTENT} from '@taiga-ui/core';
import {TUI_SELECT_OPTION} from '@taiga-ui/kit/components/select-option';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';

import {TuiComboBoxComponent} from './combo-box.component';

// TODO: 3.0 remove in ivy compilation
export const COMBOBOX_OPTION: any = TUI_SELECT_OPTION;

export const TUI_COMBO_BOX_PROVIDERS = [
    {
        provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
        useExisting: forwardRef(() => TuiComboBoxComponent),
    },
    {
        provide: TUI_DATA_LIST_HOST,
        useExisting: forwardRef(() => TuiComboBoxComponent),
    },
    {
        provide: AbstractTuiControl,
        useExisting: forwardRef(() => TuiComboBoxComponent),
    },
    {
        provide: TUI_OPTION_CONTENT,
        useValue: COMBOBOX_OPTION,
    },
    FIXED_DROPDOWN_CONTROLLER_PROVIDER,
];
