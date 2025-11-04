import {Directive, Input} from '@angular/core';

/**
 * @deprecated: use [textContent]="code"
 */
@Directive({
    selector: 'code[tuiDocText]',
    host: {
        '[textContent]': 'code',
    },
})
export class TuiDocText {
    @Input('tuiDocText')
    public code = '';
}
