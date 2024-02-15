import {ElementRef, inject, Injectable, NgZone} from '@angular/core';
import {
    TuiDestroyService,
    tuiGetElementOffset,
    tuiScrollFrom,
    tuiZoneOptimized,
} from '@taiga-ui/cdk';
import {SCROLL_REF_SELECTOR, TUI_SCROLL_REF} from '@taiga-ui/core';
import {
    distinctUntilChanged,
    map,
    Observable,
    skip,
    startWith,
    switchMap,
    take,
    takeUntil,
} from 'rxjs';

@Injectable()
export class TuiElasticStickyService extends Observable<number> {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly scrollRef: HTMLElement = inject(TUI_SCROLL_REF).nativeElement;
    private readonly zone = inject(NgZone);
    private readonly destroy$ = inject(TuiDestroyService, {self: true});

    constructor() {
        super(subscriber =>
            this.zone.onStable
                .pipe(
                    take(1),
                    switchMap(() => {
                        const host =
                            this.el.closest(SCROLL_REF_SELECTOR) || this.scrollRef;
                        const {offsetHeight} = this.el;
                        const {offsetTop} = tuiGetElementOffset(host, this.el);

                        return tuiScrollFrom(host).pipe(
                            map(() =>
                                Math.max(
                                    1 -
                                        Math.max(
                                            Math.round(host.scrollTop) - offsetTop,
                                            0,
                                        ) /
                                            offsetHeight,
                                    0,
                                ),
                            ),
                        );
                    }),
                    startWith(1),
                    distinctUntilChanged(),
                    skip(1),
                    tuiZoneOptimized(this.zone),
                    takeUntil(this.destroy$),
                )
                .subscribe(subscriber),
        );
    }
}
