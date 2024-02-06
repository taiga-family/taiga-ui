import {ElementRef, Inject, Injectable, NgZone, Self} from '@angular/core';
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
    constructor(
        @Inject(TUI_SCROLL_REF) scrollRef: ElementRef<HTMLElement>,
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(NgZone) zone: NgZone,
        @Self() @Inject(TuiDestroyService) destroy$: TuiDestroyService,
    ) {
        super(subscriber =>
            zone.onStable
                .pipe(
                    take(1),
                    switchMap(() => {
                        const host =
                            nativeElement.closest(SCROLL_REF_SELECTOR) ||
                            scrollRef.nativeElement;
                        const {offsetHeight} = nativeElement;
                        const {offsetTop} = tuiGetElementOffset(host, nativeElement);

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
                    tuiZoneOptimized(zone),
                    takeUntil(destroy$),
                )
                .subscribe(subscriber),
        );
    }
}
