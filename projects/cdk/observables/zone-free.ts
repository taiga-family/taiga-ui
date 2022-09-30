import {NgZone} from '@angular/core';
import {MonoTypeOperatorFunction, Observable, pipe} from 'rxjs';

export function tuiZonefull<T>(ngZone: NgZone): MonoTypeOperatorFunction<T> {
    return source =>
        new Observable(subscriber =>
            source.subscribe({
                next: value => ngZone.run(() => subscriber.next(value)),
                error: (error: unknown) => ngZone.run(() => subscriber.error(error)),
                complete: () => ngZone.run(() => subscriber.complete()),
            }),
        );
}

export function tuiZonefree<T>(ngZone: NgZone): MonoTypeOperatorFunction<T> {
    return source =>
        new Observable(subscriber =>
            ngZone.runOutsideAngular(() => source.subscribe(subscriber)),
        );
}

export function tuiZoneOptimized<T>(ngZone: NgZone): MonoTypeOperatorFunction<T> {
    return pipe(tuiZonefree(ngZone), tuiZonefull(ngZone));
}
