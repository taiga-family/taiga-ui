import {Directive} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiFocusedIn} from '@taiga-ui/cdk/utils/focus';

@Directive({
    selector: 'input[tuiKeypadInput]',
    exportAs: 'tuiKeypadInput',
    host: {
        // `inputmode: none` hides the native mobile keyboard; blocking `beforeinput`
        // stops typing/paste/IME from mutating the field so the on-screen keypad is
        // the single source of truth. `keydown` is left alone to preserve navigation
        // (Tab/arrows/Escape) and shortcuts — no keyboard trap (WCAG 2.1.2).
        // The caret is hidden too: the field is keypad-driven, so a blinking caret in a
        // spot the user can't type into is just noise.
        inputmode: 'none',
        '[style.caret-color]': '"transparent"',
        '(beforeinput.zoneless.prevent)': '(0)',
    },
})
export class TuiKeypadInputDirective {
    public readonly focused = tuiFocusedIn(tuiInjectElement());
}
