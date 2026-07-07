import {Directive} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiFocusedIn} from '@taiga-ui/cdk/utils/focus';

@Directive({
    selector: 'input[tuiKeypadInput]',
    exportAs: 'tuiKeypadInput',
    host: {
        // Suppress the native mobile keyboard: the input is driven by the on-screen keypad only
        inputmode: 'none',
        // Block hardware keyboard input for the same reason (keypad is the single source of truth)
        '(keydown.zoneless.prevent)': '(0)',
    },
})
export class TuiKeypadInputDirective {
    public readonly focused = tuiFocusedIn(tuiInjectElement());
}
