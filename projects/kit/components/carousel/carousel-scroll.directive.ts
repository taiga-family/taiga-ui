import {Directive} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {tuiTypedFromEvent, tuiZonefreeScheduler} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {filter, map, tap, throttleTime} from 'rxjs';

@Directive({
    selector: '[tuiCarouselScroll]',
})
export class TuiCarouselScroll {
    private readonly el = tuiInjectElement();

    public readonly tuiCarouselScroll = outputFromObservable(
        tuiTypedFromEvent(this.el, 'wheel').pipe(
            filter(({deltaX}) => Math.abs(deltaX) > 20),
            throttleTime(500, tuiZonefreeScheduler()),
            map(({deltaX}) => Math.sign(deltaX)),
            tap(() => {
                // So we always have space to scroll and overflow-behavior saves us from back nav
                this.el.scrollLeft = 10;
            }),
        ),
    );
}
