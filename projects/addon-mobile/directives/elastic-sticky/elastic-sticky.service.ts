import {ElementRef, Inject, Injectable, NgZone, Self} from '@angular/core';
import {
    TuiDestroyService,
    tuiGetElementOffset,
    tuiTypedFromEvent,
    tuiZoneOptimized,
} from '@taiga-ui/cdk';
import {SCROLL_REF_SELECTOR, TUI_SCROLL_REF} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {
    distinctUntilChanged,
    map,
    skip,
    startWith,
    switchMap,
    take,
    takeUntil,
} from 'rxjs/operators';

@Injectable()
export class TuiElasticStickyService extends Observable<number> {
    constructor(
        @Inject(TUI_SCROLL_REF) scrollRef: ElementRef<HTMLElement>,
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(NgZone) ngZone: NgZone,
        @Self() @Inject(TuiDestroyService) destroy$: TuiDestroyService,
    ) {
        super(subscriber =>
            ngZone.onStable
                .pipe(
                    take(1),
                    switchMap(() => {
                        const host =
                            nativeElement.closest(SCROLL_REF_SELECTOR) ||
                            scrollRef.nativeElement;
                        const {offsetHeight} = nativeElement;
                        const {offsetTop} = tuiGetElementOffset(host, nativeElement);

                        return tuiTypedFromEvent(
                            host === host.ownerDocument.documentElement
                                ? host.ownerDocument
                                : host,
                            `scroll`,
                        ).pipe(
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
                    tuiZoneOptimized(ngZone),
                    takeUntil(destroy$),
                )
                .subscribe(subscriber),
        );
    }
}
