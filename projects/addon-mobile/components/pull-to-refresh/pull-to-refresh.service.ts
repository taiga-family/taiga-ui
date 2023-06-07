import {ElementRef, Inject, Injectable} from '@angular/core';
import {tuiScrollFrom, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {TUI_SCROLL_REF} from '@taiga-ui/core';
import {EMPTY, Observable} from 'rxjs';
import {
    distinctUntilChanged,
    endWith,
    filter,
    map,
    scan,
    share,
    startWith,
    switchMap,
    takeUntil,
    takeWhile,
    tap,
} from 'rxjs/operators';

import {
    TUI_PULL_TO_REFRESH_COMPONENT,
    TUI_PULL_TO_REFRESH_LOADED,
} from './pull-to-refresh.providers';
import {TUI_PULL_TO_REFRESH_THRESHOLD} from './pull-to-refresh.tokens';

export const MICRO_OFFSET = 10 ** -6;

// @dynamic
@Injectable()
export class TuiPullToRefreshService extends Observable<number> {
    // Hack for iOS to determine if pulling stopped due to scroll
    // because Safari does not support `touch-action: pan-down`
    private touched = false;

    private readonly pulling$ = this.loaded$.pipe(
        startWith(null),
        switchMap(() =>
            tuiTypedFromEvent(this.element, `touchstart`, {passive: true}).pipe(
                filter(() => !this.scrollTop),
                map(({touches}) => touches[0].clientY),
                switchMap(start =>
                    tuiTypedFromEvent(this.element, `touchmove`).pipe(
                        tap((): void => {
                            this.touched = true;
                        }),
                        map(({touches}) => touches[0].clientY - start),
                        filter(distance => distance > 0),
                        takeUntil(
                            tuiTypedFromEvent(this.element, `touchend`).pipe(
                                tap((): void => {
                                    this.touched = false;
                                }),
                            ),
                        ),
                        takeUntil(tuiScrollFrom(this.scrollRef.nativeElement)),
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
                takeWhile(distance => distance !== this.threshold, true),
                startWith(0),
            ),
        ),
        distinctUntilChanged(),
        share(),
    );

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TUI_SCROLL_REF) private readonly scrollRef: ElementRef<HTMLElement>,
        @Inject(TUI_PULL_TO_REFRESH_LOADED) private readonly loaded$: Observable<unknown>,
        @Inject(TUI_PULL_TO_REFRESH_THRESHOLD) private readonly threshold: number,
        @Inject(TUI_PULL_TO_REFRESH_COMPONENT) component: unknown,
    ) {
        super(subscriber => (component ? this.pulling$ : EMPTY).subscribe(subscriber));
    }

    private get element(): HTMLElement {
        return this.el.nativeElement;
    }

    private get scrollTop(): number {
        return this.scrollRef.nativeElement.scrollTop;
    }
}
