import {Directive, Output} from '@angular/core';
import {tuiTypedFromEvent, tuiZonefreeScheduler} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {filter, map, tap, throttleTime} from 'rxjs';

@Directive({
    selector: '[tuiCarouselScroll]',
})
export class TuiCarouselScroll {
    private readonly el = tuiInjectElement();

    @Output()
    public readonly tuiCarouselScroll = tuiTypedFromEvent(this.el, 'wheel').pipe(
        filter(({deltaX}) => Math.abs(deltaX) > 20),
        throttleTime(500, tuiZonefreeScheduler()),
        map(({deltaX}) => Math.sign(deltaX)),
        tap(() => {
            // So we always have space to scroll and overflow-behavior saves us from back nav
            this.el.scrollLeft = 10;
        }),
    );
}
