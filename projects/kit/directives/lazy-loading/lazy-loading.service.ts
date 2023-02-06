import {ChangeDetectorRef, Inject, Injectable} from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import {IntersectionObserverService} from '@ng-web-apis/intersection-observer';
import {TuiDestroyService, watch} from '@taiga-ui/cdk';
import {Observable, of, Subject} from 'rxjs';
import {catchError, filter, mapTo, switchMap, take, takeUntil} from 'rxjs/operators';

@Injectable()
export class TuiLazyLoadingService extends Observable<SafeResourceUrl | string> {
    private readonly src$ = new Subject<SafeResourceUrl | string>();

    constructor(
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(IntersectionObserverService)
        intersections$: Observable<IntersectionObserverEntry[]>,
    ) {
        super(subscriber =>
            this.src$
                .pipe(
                    switchMap(src =>
                        intersections$.pipe(
                            filter(([{isIntersecting}]) => isIntersecting),
                            mapTo(src),
                            catchError(() => of(src)),
                            watch(changeDetectorRef),
                            take(1),
                        ),
                    ),
                    takeUntil(destroy$),
                )
                .subscribe(subscriber),
        );
    }

    next(src: SafeResourceUrl | string): void {
        this.src$.next(src);
    }
}
