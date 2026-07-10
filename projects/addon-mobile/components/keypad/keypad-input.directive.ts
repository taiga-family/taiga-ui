import {Directive} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiFocusedIn} from '@taiga-ui/cdk/utils/focus';

@Directive({
    selector: 'input[tuiKeypadInput]',
    exportAs: 'tuiKeypadInput',
    host: {
        // Suppress the native mobile keyboard: the on-screen keypad is the only value source
        inputmode: 'none',
        // Block every value mutation (typing, paste, IME, drop); beforeinput never fires for
        // navigation/copy, so focus isn't trapped and shortcuts keep working
        '(beforeinput.zoneless.prevent)': '(0)',
    },
})
export class TuiKeypadInputDirective {
    public readonly focused = tuiFocusedIn(tuiInjectElement());
}
