import {ElementRef, Inject, Injectable, NgZone} from '@angular/core';
import {
    RESIZE_OBSERVER_SUPPORT,
    RESIZE_OPTION_BOX,
    ResizeObserverService,
} from '@ng-web-apis/resize-observer';
import {EMPTY_ARRAY, POLLING_TIME} from '@taiga-ui/cdk/constants';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {interval, Observable} from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    map,
    mapTo,
    takeUntil,
} from 'rxjs/operators';
import {TuiDestroyService} from './destroy.service';

@Injectable()
export class TuiResizeService extends ResizeObserverService {
    constructor(
        @Inject(ElementRef) elementRef: ElementRef<HTMLElement>,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(RESIZE_OBSERVER_SUPPORT) support: boolean,
        @Inject(RESIZE_OPTION_BOX) box: ResizeObserverOptions['box'],
    ) {
        super(elementRef, ngZone, support, box);

        return this.pipe(
            catchError(() =>
                interval(POLLING_TIME).pipe(
                    map(
                        () =>
                            `${elementRef.nativeElement.clientWidth} ${elementRef.nativeElement.clientHeight}`,
                    ),
                    distinctUntilChanged(),
                    mapTo(EMPTY_ARRAY),
                ),
            ),
            takeUntil(destroy$),
            debounceTime(0),
            tuiZonefree(ngZone),
        );
    }
}
