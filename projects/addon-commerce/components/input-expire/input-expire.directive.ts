import {Directive} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TUI_MASK_EXPIRE} from '@taiga-ui/addon-commerce/constants';
import {TuiWithInput} from '@taiga-ui/core/components/input';
import {tuiMaskito} from '@taiga-ui/kit/utils';

@Directive({
    selector: 'input[tuiInputExpire]',
    hostDirectives: [MaskitoDirective, TuiWithInput],
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
