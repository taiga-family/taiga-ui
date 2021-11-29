import {Directive, ElementRef, Inject, Input} from '@angular/core';
import {INTERSECTION_ROOT} from '@ng-web-apis/intersection-observer';

@Directive({
    selector: '[tuiCarouselScroller]',
})
export class TuiCarouselScrollerDirective {
    @Input()
    set tuiCarouselScroller(scroll: boolean) {
        if (scroll) {
            this.scrollTo();
        }
    }

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(INTERSECTION_ROOT) private readonly root: ElementRef<HTMLElement>,
    ) {}

    private scrollTo() {
        this.root.nativeElement.scrollTo({
            left: this.elementRef.nativeElement.offsetLeft,
            behavior: 'smooth',
        });
    }
}
