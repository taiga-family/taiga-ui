import {AfterViewChecked, Directive, ElementRef, Inject, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';

/**
 * A directive for projecting classes from nested children to host
 */
@Directive({
    selector: '[tuiProjectClass]',
})
export class TuiProjectClassDirective implements AfterViewChecked {
    @Input('tuiProjectClass')
    @tuiDefaultProp()
    classNames: ReadonlyArray<string> = [];

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {}

    ngAfterViewChecked() {
        if (!this.classNames.length) {
            return;
        }

        this.classNames.forEach(className => {
            const hostElement = this.elementRef.nativeElement;

            if (hostElement.querySelector(`.${className}`)) {
                hostElement.classList.add(className);
            } else {
                hostElement.classList.remove(className);
            }
        });
    }
}
