import {Directive, inject} from '@angular/core';
import {TUI_IS_ANDROID} from '@taiga-ui/cdk/tokens';

@Directive({
    standalone: true,
    host: {
        inputmode: 'none',
        autocomplete: 'off',
        '[style.cursor]': '"pointer"',
        // Click on cleaner icon does not trigger `beforeinput` event --> handle all kind of deletion in input event
        '(beforeinput)': '$event.inputType.includes("delete") || $event.preventDefault()',
        /**
         * All NOT `delete***`-like actions were already cancelled by prevented `beforeinput` event.
         * The only possible case to trigger `input`-event (without preceding `beforeinput` event) - browser autofill for Chromium-based browsers.
         * We should clear any possible autofill (when browser ignores `autocomplete=off`).
         */
        '(input.capture)': 'clear($event.target)',
        // Hide Android text select handle (bubble marker below transparent caret)
        '(mousedown)': 'prevent($event, $event.target)',
    },
})
export class TuiSelectLike {
    private readonly isAndroid = inject(TUI_IS_ANDROID);

    protected clear(element: HTMLInputElement): void {
        element.value = '';
    }

    protected prevent(event: MouseEvent, element: HTMLInputElement): void {
        if (this.isAndroid) {
            event.preventDefault();
            element.focus();
        }
    }
}
