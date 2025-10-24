import {Directive, input} from '@angular/core';

/**
 * @deprecated: use [textContent]="code"
 */
@Directive({
    standalone: true,
    selector: 'code[tuiDocText]',
    host: {
        '[textContent]': 'code()',
    },
})
export class TuiDocText {
    public readonly code = input('', {alias: 'tuiDocText'});
}
