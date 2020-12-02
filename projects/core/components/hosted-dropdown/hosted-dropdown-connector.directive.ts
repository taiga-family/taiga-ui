import {Directive, ElementRef, Inject} from '@angular/core';

@Directive({
    selector: '[tuiHostedDropdownHost]',
})
export class TuiHostedDropdownConnectorDirective {
    constructor(@Inject(ElementRef) readonly elementRef: ElementRef<HTMLElement>) {}
}
