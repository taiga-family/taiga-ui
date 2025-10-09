import {computed, Directive, input} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TUI_MASK_CVC} from '@taiga-ui/addon-commerce/constants';
import {TuiWithTextfield} from '@taiga-ui/core/components/textfield';
import {tuiMaskito} from '@taiga-ui/kit/utils';

@Directive({
    standalone: true,
    selector: 'input[tuiInputCVC]',
    hostDirectives: [MaskitoDirective, TuiWithTextfield],
    host: {
        inputmode: 'numeric',
        autocomplete: 'cc-csc',
        '[placeholder]': '"0".repeat(length())',
        '[style.-webkit-text-security]': 'hidden() ? "disc" : null',
        '(copy.prevent)': '(0)',
    },
})
export class TuiInputCVC {
    protected readonly mask = computed(() => tuiMaskito(TUI_MASK_CVC(this.length())));

    public readonly hidden = input(true);

    public readonly length = input<3 | 4>(3);
}
