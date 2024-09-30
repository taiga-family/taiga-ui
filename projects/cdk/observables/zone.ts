import {inject, NgZone} from '@angular/core';
import type {MonoTypeOperatorFunction, SchedulerLike, Subscription} from 'rxjs';
import {asyncScheduler, Observable, pipe} from 'rxjs';

export function tuiZonefull<T>(zone = inject(NgZone)): MonoTypeOperatorFunction<T> {
    return (source) =>
        new Observable((subscriber) =>
            source.subscribe({
                next: (value) => zone.run(() => subscriber.next(value)),
                error: (error: unknown) => zone.run(() => subscriber.error(error)),
                complete: () => zone.run(() => subscriber.complete()),
            }),
        );
}

export function tuiZonefree<T>(zone = inject(NgZone)): MonoTypeOperatorFunction<T> {
    return (source) =>
        new Observable((subscriber) =>
            zone.runOutsideAngular(() => source.subscribe(subscriber)),
        );
}

export function tuiZoneOptimized<T>(zone = inject(NgZone)): MonoTypeOperatorFunction<T> {
    return pipe(tuiZonefree(zone), tuiZonefull(zone));
}

class TuiZoneScheduler implements SchedulerLike {
    constructor(
        private readonly zoneConditionFn: <T>(fn: (...args: unknown[]) => T) => T,
        private readonly scheduler: SchedulerLike = asyncScheduler,
    ) {}

    public now(): number {
        return this.scheduler.now();
    }

    public schedule(...args: Parameters<SchedulerLike['schedule']>): Subscription {
        return this.zoneConditionFn(() => this.scheduler.schedule(...args));
    }
}

export function tuiZonefreeScheduler(
    zone = inject(NgZone),
    scheduler: SchedulerLike = asyncScheduler,
): SchedulerLike {
    return new TuiZoneScheduler(zone.runOutsideAngular.bind(zone), scheduler);
}

export function tuiZonefullScheduler(
    zone = inject(NgZone),
    scheduler: SchedulerLike = asyncScheduler,
): SchedulerLike {
    return new TuiZoneScheduler(zone.run.bind(zone), scheduler);
}
