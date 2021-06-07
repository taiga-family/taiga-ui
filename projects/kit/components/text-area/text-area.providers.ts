import {forwardRef} from '@angular/core';
import {TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk';
import {
    HINT_CONTROLLER_PROVIDER,
    MODE_PROVIDER,
    TEXTFIELD_CONTROLLER_PROVIDER,
} from '@taiga-ui/core';
import {TuiTextAreaComponent} from './text-area.component';

export const TUI_TEXT_AREA_PROVIDERS = [
    {
        provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
        useExisting: forwardRef(() => TuiTextAreaComponent),
    },
    TEXTFIELD_CONTROLLER_PROVIDER,
    HINT_CONTROLLER_PROVIDER,
    MODE_PROVIDER,
];
