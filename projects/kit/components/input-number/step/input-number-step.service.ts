import {DOCUMENT} from '@angular/common';
import {DestroyRef, inject, Injectable} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
    expand,
    fromEvent,
    map,
    merge,
    type Observable,
    share,
    Subject,
    switchMap,
    takeUntil,
    timer,
} from 'rxjs';

const INITIAL_DELAY = 300;
const DELAY_DECREMENT = 15;
const MIN_DELAY = 100;

function getDelay(index: number): number {
    return Math.max(INITIAL_DELAY - index * DELAY_DECREMENT, MIN_DELAY);
}

@Injectable()
export class TuiInputNumberStepService<T> {
    private readonly doc = inject(DOCUMENT);
    private readonly destroyRef = inject(DestroyRef);
    private readonly start$ = new Subject<T>();
    private readonly stop$ = merge(
        fromEvent(this.doc, 'pointerup'),
        fromEvent(this.doc, 'pointerleave'),
        fromEvent(this.doc, 'pointercancel'),
    );

    public readonly steps$: Observable<T> = this.start$.pipe(
        switchMap((value) =>
            timer(INITIAL_DELAY).pipe(
                expand((_, index) => timer(getDelay(index))),
                map(() => value),
                takeUntil(this.stop$),
            ),
        ),
        takeUntilDestroyed(this.destroyRef),
        share(),
    );

    public next(value: T): void {
        this.start$.next(value);
    }
}
