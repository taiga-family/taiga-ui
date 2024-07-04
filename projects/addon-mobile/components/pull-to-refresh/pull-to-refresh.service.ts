import {inject, Injectable} from '@angular/core';
import {tuiScrollFrom, tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {
    distinctUntilChanged,
    EMPTY,
    endWith,
    filter,
    map,
    Observable,
    scan,
    share,
    startWith,
    switchMap,
    takeUntil,
    takeWhile,
    tap,
} from 'rxjs';

import {
    TUI_PULL_TO_REFRESH_COMPONENT,
    TUI_PULL_TO_REFRESH_LOADED,
    TUI_PULL_TO_REFRESH_THRESHOLD,
} from './pull-to-refresh.providers';

export const MICRO_OFFSET = 10 ** -6;

@Injectable()
export class TuiPullToRefreshService extends Observable<number> {
    private readonly el = tuiInjectElement();
    private readonly scrollRef: HTMLElement = inject(TUI_SCROLL_REF).nativeElement;
    private readonly loaded$ = inject(TUI_PULL_TO_REFRESH_LOADED);
    private readonly threshold = inject(TUI_PULL_TO_REFRESH_THRESHOLD);

    // Hack for iOS to determine if pulling stopped due to scroll
    // because Safari does not support `touch-action: pan-down`
    private touched = false;

    private readonly pulling$ = this.loaded$.pipe(
        startWith(null),
        switchMap(() =>
            tuiTypedFromEvent(this.el, 'touchstart', {passive: true}).pipe(
                filter(() => !this.scrollRef.scrollTop),
                map(({touches}) => touches[0].clientY),
                switchMap((start) =>
                    tuiTypedFromEvent(this.el, 'touchmove').pipe(
                        tap((): void => {
                            this.touched = true;
                        }),
                        map(({touches}) => touches[0].clientY - start),
                        filter((distance) => distance > 0),
                        takeUntil(
                            tuiTypedFromEvent(this.el, 'touchend').pipe(
                                tap((): void => {
                                    this.touched = false;
                                }),
                            ),
                        ),
                        takeUntil(tuiScrollFrom(this.scrollRef)),
                        endWith(0),
                    ),
                ),
                scan(
                    (prev, current) =>
                        !current && !this.touched && prev > this.threshold
                            ? this.threshold
                            : current + current * MICRO_OFFSET,
                    0,
                ),
                takeWhile((distance) => distance !== this.threshold, true),
                startWith(0),
            ),
        ),
        distinctUntilChanged(),
        share(),
    );

    constructor() {
        const component = inject(TUI_PULL_TO_REFRESH_COMPONENT);

        super((subscriber) => (component ? this.pulling$ : EMPTY).subscribe(subscriber));
    }
}
