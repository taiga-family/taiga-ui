import {ElementRef, Inject, Injectable, NgZone, Optional} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {
    getClosestElement,
    getElementOffset,
    TuiDestroyService,
    tuiZoneOptimized,
    typedFromEvent,
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

// @dynamic
@Injectable()
export class TuiElasticStickyService extends Observable<number> {
    constructor(
        @Optional()
        @Inject(TUI_SCROLL_REF)
        scrollRef: ElementRef<HTMLElement> | null,
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(WINDOW) windowRef: Window,
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
    ) {
        super(subscriber =>
            ngZone.onStable
                .pipe(
                    take(1),
                    switchMap(() => {
                        const closest = getClosestElement(
                            nativeElement,
                            SCROLL_REF_SELECTOR,
                        );
                        const host =
                            scrollRef && scrollRef.nativeElement.contains(closest)
                                ? closest
                                : scrollRef && scrollRef.nativeElement;
                        const {offsetHeight} = nativeElement;
                        const offsetTop = this.getInitialOffset(
                            host || windowRef,
                            nativeElement,
                        );

                        return typedFromEvent(host || windowRef, 'scroll').pipe(
                            map(() =>
                                Math.max(
                                    1 -
                                        Math.max(
                                            Math.round(
                                                host
                                                    ? host.scrollTop
                                                    : windowRef.pageYOffset,
                                            ) - offsetTop,
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
                    takeUntil(destroy$),
                    skip(1),
                    tuiZoneOptimized(ngZone),
                )
                .subscribe(subscriber),
        );
    }

    private getInitialOffset(host: Element | Window, element: HTMLElement): number {
        return host instanceof Element
            ? getElementOffset(host, element).offsetTop
            : element.getBoundingClientRect().top;
    }
}
