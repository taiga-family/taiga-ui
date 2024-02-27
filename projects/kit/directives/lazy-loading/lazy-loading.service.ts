import {ChangeDetectorRef, inject, Injectable} from '@angular/core';
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
    private readonly intersections$ = inject<Observable<IntersectionObserverEntry[]>>(
        IntersectionObserverService,
    );

    private readonly destroy$ = inject(TuiDestroyService, {self: true});
    private readonly src$ = new Subject<SafeResourceUrl | string>();
    private readonly cdr = inject(ChangeDetectorRef);

    constructor() {
        super(subscriber =>
            this.src$
                .pipe(
                    switchMap(src =>
                        this.intersections$.pipe(
                            filter(([{isIntersecting}]) => isIntersecting),
                            map(() => src),
                            catchError(() => of(src)),
                            tuiWatch(this.cdr),
                            take(1),
                        ),
                    ),
                    takeUntil(this.destroy$),
                )
                .subscribe(subscriber),
        );
    }

    public next(src: SafeResourceUrl | string): void {
        this.src$.next(src);
    }
}
