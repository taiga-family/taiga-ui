import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
    standalone: true,
    selector: 'code[tuiText]',
})
export class TuiTextCode {
    @Input('tuiText')
    @HostBinding('textContent')
    public code = '';
}
