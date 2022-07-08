import {DOCUMENT} from '@angular/common';
import {Inject, Injectable, NgZone} from '@angular/core';
import {tuiZoneOptimized, typedFromEvent} from '@taiga-ui/cdk/observables';
import {getActualTarget} from '@taiga-ui/cdk/utils/dom';
import {merge, Observable} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    mapTo,
    startWith,
    switchMap,
    take,
} from 'rxjs/operators';

/** @deprecated TODO remove in v3.0 */
// @dynamic
@Injectable({
    providedIn: 'root',
})
export class TuiHoveredService {
    private readonly documentEvents$: Observable<Event>;

    constructor(
        @Inject(DOCUMENT) documentRef: Document,
        @Inject(NgZone) private readonly ngZone: NgZone,
    ) {
        this.documentEvents$ = merge(
            typedFromEvent(documentRef, 'mousemove'),
            typedFromEvent(documentRef, 'touchstart', {capture: true}),
        );
    }

    createHovered$(
        target: Element,
        options: AddEventListenerOptions = {passive: true},
    ): Observable<boolean> {
        return merge(
            typedFromEvent(target, 'mouseenter', options),
            typedFromEvent(target, 'touchstart', options),
        ).pipe(
            switchMap(() =>
                merge(
                    typedFromEvent(target, 'mouseleave', options),
                    this.documentEvents$.pipe(
                        filter(event => !target.contains(getActualTarget(event))),
                        tuiZoneOptimized(this.ngZone),
                        take(1),
                    ),
                ).pipe(mapTo(false), startWith(true)),
            ),
            distinctUntilChanged(),
        );
    }
}
