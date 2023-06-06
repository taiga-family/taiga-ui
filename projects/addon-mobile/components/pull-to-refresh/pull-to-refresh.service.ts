import {ElementRef, Inject, Injectable} from '@angular/core';
import {TUI_IS_IOS, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {EMPTY, merge, Observable} from 'rxjs';
import {endWith, filter, map, scan, switchMap, takeUntil} from 'rxjs/operators';

import {
    TUI_PULL_TO_REFRESH_COMPONENT,
    TUI_PULL_TO_REFRESH_LOADED,
} from './pull-to-refresh.providers';
import {TUI_PULL_TO_REFRESH_THRESHOLD} from './pull-to-refresh.tokens';

export const MICRO_OFFSET = 10 ** -6;

// @dynamic
@Injectable()
export class TuiPullToRefreshService extends Observable<number> {
    private readonly pulling$ = merge(
        tuiTypedFromEvent(this.element, `touchstart`, {passive: true}).pipe(
            filter(() => this.element.scrollTop === 0),
            switchMap(touchStart =>
                tuiTypedFromEvent(this.element, `touchmove`).pipe(
                    map(
                        touchMove =>
                            touchMove.touches[0].clientY - touchStart.touches[0].clientY,
                    ),
                    takeUntil(tuiTypedFromEvent(this.element, `touchend`)),
                    endWith(0),
                ),
            ),
        ),
        this.loaded$.pipe(map(() => NaN)),
    ).pipe(
        scan((max, current) => {
            if (Number.isNaN(current)) {
                return 0;
            }

            const androidLoading = !this.isIos && max === this.threshold;
            const dropped = current === 0 && max > this.threshold;

            return androidLoading || dropped
                ? this.threshold
                : current + current * MICRO_OFFSET;
        }, 0),
    );

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TUI_IS_IOS) private readonly isIos: boolean,
        @Inject(TUI_PULL_TO_REFRESH_LOADED) private readonly loaded$: Observable<unknown>,
        @Inject(TUI_PULL_TO_REFRESH_THRESHOLD) private readonly threshold: number,
        @Inject(TUI_PULL_TO_REFRESH_COMPONENT) component: unknown,
    ) {
        super(subscriber => (component ? this.pulling$ : EMPTY).subscribe(subscriber));
    }

    private get element(): HTMLElement {
        return this.el.nativeElement;
    }
}
