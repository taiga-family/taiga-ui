import {Directive} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TUI_MASK_EXPIRE} from '@taiga-ui/addon-commerce/constants';
import {TuiWithTextfield} from '@taiga-ui/core/components/textfield';
import {tuiMaskito} from '@taiga-ui/kit/utils';

@Directive({
    selector: 'input[tuiInputExpire]',
    hostDirectives: [MaskitoDirective, TuiWithTextfield],
    host: {
        inputmode: 'numeric',
        placeholder: '00/00',
        translate: 'no',
        maxlength: '5',
        name: 'ccexpiryyear',
        autocomplete: 'cc-exp',
    },
})
export class TuiInputExpire {
    protected readonly mask = tuiMaskito(TUI_MASK_EXPIRE);
}
