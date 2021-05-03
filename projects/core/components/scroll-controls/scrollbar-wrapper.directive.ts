import {Directive, ElementRef, Inject} from '@angular/core';

@Directive({
    selector: '[tuiScrollbarWrapper]',
})
export class TuiScrollbarWrapperDirective {
    nativeElement: HTMLElement;

    constructor(@Inject(ElementRef) {nativeElement}: ElementRef) {
        this.nativeElement = nativeElement;
    }
}
