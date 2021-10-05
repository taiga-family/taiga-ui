import {forwardRef} from '@angular/core';
import {TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk';
import {HINT_CONTROLLER_PROVIDER} from '@taiga-ui/core/directives/hint-controller';
import {TEXTFIELD_CONTROLLER_PROVIDER} from '@taiga-ui/core/directives/textfield-controller';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {TuiPrimitiveTextfieldComponent} from './primitive-textfield.component';

export const TUI_PRIMITIVE_TEXTFIELD_PROVIDERS = [
    {
        provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
        useExisting: forwardRef(() => TuiPrimitiveTextfieldComponent),
    },
    TEXTFIELD_CONTROLLER_PROVIDER,
    HINT_CONTROLLER_PROVIDER,
    MODE_PROVIDER,
];
