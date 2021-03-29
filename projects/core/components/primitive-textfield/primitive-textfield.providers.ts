import {forwardRef, Optional} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {identity, TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk';
import {HINT_CONTROLLER_PROVIDER} from '@taiga-ui/core/directives/hint-controller';
import {TEXTFIELD_CONTROLLER_PROVIDER} from '@taiga-ui/core/directives/textfield-controller';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {TUI_VALUE_ACCESSOR} from '@taiga-ui/core/tokens';
import {TuiPrimitiveTextfieldComponent} from './primitive-textfield.component';

export const TUI_PRIMITIVE_TEXTFIELD_PROVIDERS = [
    {
        provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
        useExisting: forwardRef(() => TuiPrimitiveTextfieldComponent),
    },
    {
        provide: TUI_VALUE_ACCESSOR,
        deps: [[new Optional(), NG_VALUE_ACCESSOR]],
        useFactory: identity,
    },
    TEXTFIELD_CONTROLLER_PROVIDER,
    HINT_CONTROLLER_PROVIDER,
    MODE_PROVIDER,
];
