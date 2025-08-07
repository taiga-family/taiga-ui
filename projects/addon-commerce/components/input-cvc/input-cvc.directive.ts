import {Directive, inject, Input, type OnChanges} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TUI_INPUT_CARD_OPTIONS} from '@taiga-ui/addon-commerce/components/input-card';
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
        '[placeholder]': '"0".repeat(length)',
        '[style.-webkit-text-security]': 'hidden ? "disc" : null',
        '(copy.prevent)': '(0)',
    },
})
export class TuiInputCVC implements OnChanges {
    private readonly mask = tuiMaskito(TUI_MASK_CVC(3));

    /** @deprecated apparently "off" doesn't disable autocomplete */
    @Input()
    public autocomplete = inject(TUI_INPUT_CARD_OPTIONS).autocomplete;

    @Input()
    public hidden = true;

    @Input()
    public length: 3 | 4 = 3;

    // TODO: refactor to signal inputs after Angular update
    public ngOnChanges(): void {
        this.mask.set(TUI_MASK_CVC(this.length));
    }
}
