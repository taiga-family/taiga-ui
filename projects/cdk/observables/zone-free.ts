import {NgZone} from '@angular/core';
import {
    MonoTypeOperatorFunction,
    Observable,
    Observer,
    Operator,
    TeardownLogic,
} from 'rxjs';
import {map} from 'rxjs/operators';

class TuiZonefreeOperator<T> implements Operator<T, T> {
    constructor(private readonly ngZone: NgZone) {}

    call(observer: Observer<T>, source: Observable<T>): TeardownLogic {
        return this.ngZone.runOutsideAngular(() => source.subscribe(observer));
    }
}

export function tuiZonefull<T>(ngZone: NgZone): MonoTypeOperatorFunction<T> {
    return map(value => ngZone.run(() => value));
}

export function tuiZonefree<T>(ngZone: NgZone): MonoTypeOperatorFunction<T> {
    return source => source.lift(new TuiZonefreeOperator<T>(ngZone));
}

export function tuiZoneOptimized<T>(ngZone: NgZone): MonoTypeOperatorFunction<T> {
    return source$ => source$.pipe(tuiZonefree(ngZone), tuiZonefull(ngZone));
}
