import {Directive} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiFocusedIn} from '@taiga-ui/cdk/utils/focus';

@Directive({
    selector: 'input[tuiKeypadInput]',
    exportAs: 'tuiKeypadInput',
    host: {
        inputmode: 'none',
        '(beforeinput.zoneless.prevent)': '(0)',
    },
})
export class TuiKeypadInputDirective {
    public readonly focused = tuiFocusedIn(tuiInjectElement());
}
