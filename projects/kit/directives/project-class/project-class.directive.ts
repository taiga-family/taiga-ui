import {AfterViewChecked, Directive, ElementRef, inject, Input} from '@angular/core';

/**
 * A directive for projecting classes from nested children to host
 */
@Directive({
    selector: '[tuiProjectClass]',
})
export class TuiProjectClassDirective implements AfterViewChecked {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    @Input('tuiProjectClass')
    classNames: readonly string[] = [];

    ngAfterViewChecked(): void {
        this.classNames.forEach(className =>
            this.el.classList.toggle(className, !!this.el.querySelector(`.${className}`)),
        );
    }
}
