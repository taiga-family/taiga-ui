import {computed, Directive, input} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TUI_MASK_CVC} from '@taiga-ui/addon-commerce/constants';
import {TuiWithInput} from '@taiga-ui/core/components/input';
import {tuiMaskito} from '@taiga-ui/kit/utils';

@Directive({
    selector: 'input[tuiInputCVC]',
    hostDirectives: [MaskitoDirective, TuiWithInput],
    host: {
        inputmode: 'numeric',
        autocomplete: 'cc-csc',
        '[placeholder]': '"0".repeat(length())',
        '[style.-webkit-text-security]': 'hidden() ? "disc" : null',
        '(copy.prevent)': '(0)',
    },
})
export class TuiInputCVC {
    protected readonly mask = tuiMaskito(computed(() => TUI_MASK_CVC(this.length())));

    public readonly hidden = input(true);

    public readonly length = input<3 | 4>(3);
}
