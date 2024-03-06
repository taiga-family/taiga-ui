import type {NgZone} from '@angular/core';
import type {MonoTypeOperatorFunction} from 'rxjs';
import {Observable, pipe} from 'rxjs';

export function tuiZonefull<T>(zone: NgZone): MonoTypeOperatorFunction<T> {
    return source =>
        new Observable(subscriber =>
            source.subscribe({
                next: value => zone.run(() => subscriber.next(value)),
                error: (error: unknown) => zone.run(() => subscriber.error(error)),
                complete: () => zone.run(() => subscriber.complete()),
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
