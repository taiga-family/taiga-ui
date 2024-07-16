import {Directive, inject, Input} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TUI_INPUT_CARD_OPTIONS} from '@taiga-ui/addon-commerce/components/input-card';
import {TUI_MASK_EXPIRE} from '@taiga-ui/addon-commerce/constants';
import {tuiMaskito} from '@taiga-ui/kit/utils';

@Directive({
    standalone: true,
    selector: 'input[tuiInputExpire]',
    hostDirectives: [MaskitoDirective],
    host: {
        inputmode: 'numeric',
        placeholder: '00/00',
        translate: 'no',
        '[autocomplete]': 'autocomplete ? "cc-exp" : "off"',
    },
})
export class TuiInputExpire {
    protected readonly mask = tuiMaskito(TUI_MASK_EXPIRE);

    @Input()
    public autocomplete = inject(TUI_INPUT_CARD_OPTIONS).autocomplete;
}
