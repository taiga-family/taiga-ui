import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
    standalone: true,
    selector: 'code[tuiText]',
})
export class TuiTextCodeDirective {
    @Input('tuiText')
    @HostBinding('textContent')
    public code = '';
}
