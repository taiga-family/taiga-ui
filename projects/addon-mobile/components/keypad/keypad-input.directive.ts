import {Directive} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiFocusedIn} from '@taiga-ui/cdk/utils/focus';

@Directive({
    selector: 'input[tuiKeypadInput]',
    exportAs: 'tuiKeypadInput',
    host: {
        // Suppress the native mobile keyboard: the input is driven by the on-screen keypad only
        inputmode: 'none',
        '(keydown.zoneless)': 'onKeydown($event)',
    },
})
export class TuiKeypadInputDirective {
    public readonly focused = tuiFocusedIn(tuiInjectElement());

    protected onKeydown(event: KeyboardEvent): void {
        const mutatesValue =
            !event.ctrlKey &&
            !event.metaKey &&
            !event.altKey &&
            (event.key.length === 1 ||
                event.key === 'Backspace' ||
                event.key === 'Delete');

        if (mutatesValue) {
            event.preventDefault();
        }
    }
}
