import {Directive, Input} from '@angular/core';

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
