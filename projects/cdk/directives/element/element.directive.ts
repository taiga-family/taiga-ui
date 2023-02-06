import {Directive, ElementRef, Inject} from '@angular/core';

@Directive({
    selector: '[tuiElement]',
    exportAs: 'elementRef',
})
export class TuiElementDirective<T extends Element = HTMLElement> extends ElementRef<T> {
    constructor(@Inject(ElementRef) {nativeElement}: ElementRef<T>) {
        super(nativeElement);
    }
}
