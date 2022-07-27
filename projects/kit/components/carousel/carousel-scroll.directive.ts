import {Directive, ElementRef, Inject, Output} from '@angular/core';
import {typedFromEvent} from '@taiga-ui/cdk';
import {filter, map, tap, throttleTime} from 'rxjs/operators';

@Directive({
    selector: `[tuiCarouselScroll]`,
})
export class TuiCarouselScrollDirective {
    @Output()
    readonly tuiCarouselScroll = typedFromEvent(
        this.elementRef.nativeElement,
        `wheel`,
    ).pipe(
        filter(({deltaX}) => Math.abs(deltaX) > 20),
        throttleTime(500),
        map(({deltaX}) => Math.sign(deltaX)),
        tap(() => {
            // So we always have space to scroll and overflow-behavior saves us from back nav
            this.elementRef.nativeElement.scrollLeft = 10;
        }),
    );

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {}
}
