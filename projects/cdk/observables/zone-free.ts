import {NgZone} from '@angular/core';
import {MonoTypeOperatorFunction, Observable, pipe} from 'rxjs';

export function tuiZonefull<T>(zone: NgZone): MonoTypeOperatorFunction<T> {
    return source =>
        new Observable(subscriber =>
            source.subscribe({
                complete: () => zone.run(() => subscriber.complete()),
                error: (error: unknown) => zone.run(() => subscriber.error(error)),
                next: value => zone.run(() => subscriber.next(value)),
            }),
        );
}

export function tuiZonefree<T>(zone: NgZone): MonoTypeOperatorFunction<T> {
    return source =>
        new Observable(subscriber =>
            zone.runOutsideAngular(() => source.subscribe(subscriber)),
        );
}

export function tuiZoneOptimized<T>(zone: NgZone): MonoTypeOperatorFunction<T> {
    return pipe(tuiZonefree(zone), tuiZonefull(zone));
}
