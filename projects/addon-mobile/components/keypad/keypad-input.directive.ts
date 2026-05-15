import {Directive} from '@angular/core';

@Directive({
    selector: 'input[tuiKeypadInput]',
    host: {
        inputmode: 'none',
        '(keydown.zoneless.prevent)': '(0)',
    },
})
export class TuiKeypadInputDirective {}
