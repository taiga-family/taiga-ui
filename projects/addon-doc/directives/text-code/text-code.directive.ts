import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
    selector: 'code[tuiText]',
})
export class TuiTextCodeDirective {
    @Input('tuiText')
    @HostBinding('textContent')
    code = '';
}
