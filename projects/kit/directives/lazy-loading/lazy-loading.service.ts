import {ChangeDetectorRef, Inject, Injectable, Self} from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import {IntersectionObserverService} from '@ng-web-apis/intersection-observer';
import {TuiDestroyService, tuiWatch} from '@taiga-ui/cdk';
import {
    catchError,
    filter,
    map,
    Observable,
    of,
    Subject,
    switchMap,
    take,
    takeUntil,
} from 'rxjs';

@Injectable()
export class TuiLazyLoadingService extends Observable<SafeResourceUrl | string> {
    private readonly src$ = new Subject<SafeResourceUrl | string>();

    constructor(
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(IntersectionObserverService)
        intersections$: Observable<IntersectionObserverEntry[]>,
    ) {
        super(subscriber =>
            this.src$
                .pipe(
                    switchMap(src =>
                        intersections$.pipe(
                            filter(([{isIntersecting}]) => isIntersecting),
                            map(() => src),
                            catchError(() => of(src)),
                            tuiWatch(cdr),
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
