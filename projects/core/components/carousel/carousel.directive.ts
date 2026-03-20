import {Directive, effect, inject, input} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {WA_PAGE_VISIBILITY} from '@ng-web-apis/common';
import {TUI_FALSE_HANDLER, TUI_TRUE_HANDLER} from '@taiga-ui/cdk/constants';
import {tuiIfMap} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {combineLatest, fromEvent, map, merge, switchMap, takeWhile, timer} from 'rxjs';

import {TuiCarouselComponent} from './carousel.component';

@Directive({
    selector: 'tui-carousel[duration]',
    exportAs: 'tuiCarousel',
})
export class TuiCarouselDirective {
    private readonly el = tuiInjectElement();
    private readonly carousel = inject(TuiCarouselComponent);
    private readonly running$ = merge(
        fromEvent(this.el, 'mouseenter').pipe(map(TUI_FALSE_HANDLER)),
        fromEvent(this.el, 'touchstart').pipe(map(TUI_FALSE_HANDLER)),
        fromEvent(this.el, 'touchend').pipe(map(TUI_TRUE_HANDLER)),
        fromEvent(this.el, 'mouseleave').pipe(map(TUI_TRUE_HANDLER)),
        inject(WA_PAGE_VISIBILITY),
    );

    public readonly duration = input(0);
    public readonly progress = toSignal(
        combineLatest([
            toObservable(this.duration),
            toObservable(this.carousel.index),
        ]).pipe(
            switchMap(([duration]) =>
                this.running$.pipe(
                    tuiIfMap(() =>
                        timer(0, 100).pipe(
                            map((i) => Math.min(100, ((i * 100) / duration) * 100)),
                            takeWhile((percent) => percent < 100, true),
                        ),
                    ),
                ),
            ),
        ),
        {initialValue: 0},
    );

    protected readonly sync = effect(() => {
        if (this.progress() === 100) {
            this.carousel.next();
        }
    });
}
