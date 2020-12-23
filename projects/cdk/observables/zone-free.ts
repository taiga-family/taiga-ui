import {NgZone} from '@angular/core';
import {
    MonoTypeOperatorFunction,
    Observable,
    Observer,
    Operator,
    pipe,
    TeardownLogic,
} from 'rxjs';

class TuiZonefreeOperator<T> implements Operator<T, T> {
    constructor(private readonly ngZone: NgZone) {}

    call(observer: Observer<T>, source: Observable<T>): TeardownLogic {
        return this.ngZone.runOutsideAngular(() => source.subscribe(observer));
    }
}

export function tuiZonefull<T>(ngZone: NgZone): MonoTypeOperatorFunction<T> {
    return source =>
        new Observable(subscriber =>
            source.subscribe({
                next: value => ngZone.run(() => subscriber.next(value)),
                error: error => ngZone.run(() => subscriber.error(error)),
                complete: () => ngZone.run(() => subscriber.complete()),
            }),
        );
}

export function tuiZonefree<T>(ngZone: NgZone): MonoTypeOperatorFunction<T> {
    return source => source.lift(new TuiZonefreeOperator<T>(ngZone));
}

export function tuiZoneOptimized<T>(ngZone: NgZone): MonoTypeOperatorFunction<T> {
    return pipe(tuiZonefree(ngZone), tuiZonefull(ngZone));
}
