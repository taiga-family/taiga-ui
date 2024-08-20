import {Directive, Input} from '@angular/core';

/**
 * @deprecated: use [textContent]="code"
 */
@Directive({
    standalone: true,
    selector: 'code[tuiDocText]',
    host: {
        '[textContent]': 'code',
    },
})
export class TuiDocText {
    @Input('tuiDocText')
    public code = '';
}
