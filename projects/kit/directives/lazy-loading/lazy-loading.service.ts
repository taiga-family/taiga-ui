import {ChangeDetectorRef, inject, Injectable} from '@angular/core';
import type {SafeResourceUrl} from '@angular/platform-browser';
import {IntersectionObserverService} from '@ng-web-apis/intersection-observer';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {filter, map, Observable, Subject, switchMap, take} from 'rxjs';

@Injectable()
export class TuiLazyLoadingService extends Observable<SafeResourceUrl | string> {
    private readonly src$ = new Subject<SafeResourceUrl | string>();
    private readonly intersections$ = inject(IntersectionObserverService);
    private readonly stream$ = this.src$.pipe(
        switchMap((src) =>
            this.intersections$.pipe(
                filter(([{isIntersecting}]) => isIntersecting),
                map(() => src),
                take(1),
            ),
        ),
        tuiWatch(inject(ChangeDetectorRef)),
    );

    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
    }

    public next(src: SafeResourceUrl | string): void {
        this.src$.next(src);
    }
}
