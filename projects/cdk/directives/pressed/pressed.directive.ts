import {Directive, ElementRef, Inject, Output} from '@angular/core';
import {pressedObservable} from '@taiga-ui/cdk/observables';

@Directive({
    selector: '[tuiPressedChange]',
})
export class TuiPressedDirective {
    @Output()
    readonly tuiPressedChange = pressedObservable(this.elementRef.nativeElement);

    constructor(@Inject(ElementRef) private readonly elementRef: ElementRef<Element>) {}
}
