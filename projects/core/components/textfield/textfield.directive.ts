import {Directive} from '@angular/core';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';

import {TuiTextfieldBase} from './textfield.base';

@Directive({
    standalone: true,
    selector: 'input[tuiTextfield]',
    hostDirectives: [TuiNativeValidator, TuiAppearance],
    host: {
        '[id]': 'el.id || id',
        '[readOnly]': 'readOnly',
        '[class._empty]': 'el.value === ""',
        '[attr.data-mode]': 'mode',
        '(input)': '0',
        '(focusin)': '0',
        '(focusout)': '0',
    },
})
export class TuiTextfieldDirective extends TuiTextfieldBase {}
