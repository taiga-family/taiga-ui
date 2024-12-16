import {Directive, inject, Input} from '@angular/core';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils';

/**
 * Scrolls input into view on iOS, so it doesn't get covered by virtual keyboard
 */
@Directive({
    standalone: true,
    selector: 'input[tuiInputMode]',
})
export class TuiInputMode {
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly ios = inject(TUI_IS_IOS);

    @Input()
    set tuiInputMode(mode: string) {
        const {inputMode} = this.el;

        this.el.inputMode = mode;

        if (inputMode === 'none' && this.ios && this.el.matches(':focus')) {
            this.el.scrollIntoView();
        }
    }
}
