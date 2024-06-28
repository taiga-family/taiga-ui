import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
    standalone: true,
    selector: 'code[tuiDocText]',
})
export class TuiDocText {
    @Input('tuiDocText')
    @HostBinding('textContent')
    public code = '';
}
