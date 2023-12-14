import {ElementRef, Inject, Injectable, NgZone, Self} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {
    RESIZE_OBSERVER_SUPPORT,
    RESIZE_OPTION_BOX,
    ResizeObserverService,
} from '@ng-web-apis/resize-observer';
import {EMPTY_ARRAY, POLLING_TIME} from '@taiga-ui/cdk/constants';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    map,
    Observable,
    share,
    takeUntil,
    throttleTime,
} from 'rxjs';

import {TuiDestroyService} from './destroy.service';

// TODO: Remove in 4.0 when Safari is bumped to 13
@Injectable()
export class TuiResizeService extends ResizeObserverService {
    constructor(
        @Inject(ElementRef) el: ElementRef<HTMLElement>,
        @Inject(NgZone) zone: NgZone,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(RESIZE_OBSERVER_SUPPORT) support: boolean,
        @Inject(RESIZE_OPTION_BOX) box: ResizeObserverBoxOptions,
        @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>,
    ) {
        super(el, zone, support, box);

        return this.pipe(
            catchError(() =>
                /**
                 * @note: if not supported ResizeObserver
                 * remove `catchError` after supports modern browsers
                 */
                animationFrame$.pipe(
                    throttleTime(POLLING_TIME),
                    map(
                        () =>
                            `${el.nativeElement.clientWidth} ${el.nativeElement.clientHeight}`,
                    ),
                    distinctUntilChanged(),
                    map(() => EMPTY_ARRAY),
                ),
            ),
            debounceTime(0),
            tuiZonefree(zone),
            share(),
            takeUntil(destroy$),
        );
    }
}
