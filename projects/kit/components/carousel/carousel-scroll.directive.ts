import {Directive, Output} from '@angular/core';
import {tuiInjectElement, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {filter, map, tap, throttleTime} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiCarouselScroll]',
})
export class TuiCarouselScrollDirective {
    private readonly el = tuiInjectElement();

    @Output()
    public readonly tuiCarouselScroll = tuiTypedFromEvent(this.el, 'wheel').pipe(
        filter(({deltaX}) => Math.abs(deltaX) > 20),
        throttleTime(500),
        map(({deltaX}) => Math.sign(deltaX)),
        tap(() => {
            // So we always have space to scroll and overflow-behavior saves us from back nav
            this.el.scrollLeft = 10;
        }),
    );
}
