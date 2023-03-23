import {ɵAnimationEngine as AnimationEngine} from '@angular/animations/browser';
import {inject, InjectFlags, InjectionToken} from '@angular/core';
import type {Observable} from 'rxjs';
import {BehaviorSubject, timer} from 'rxjs';
import {map, share, startWith, switchMap} from 'rxjs/operators';

/**
 * Element currently being removed by AnimationEngine
 */
export const TUI_REMOVED_ELEMENT = new InjectionToken<Observable<Element | null>>(
    `[TUI_REMOVED_ELEMENT]`,
    {
        factory: () => {
            const stub = {onRemovalComplete: () => {}};
            const element$ = new BehaviorSubject<Element | null>(null);
            const engine = inject(AnimationEngine, InjectFlags.Optional) || stub;
            const {onRemovalComplete = stub.onRemovalComplete} = engine;

            engine.onRemovalComplete = (element, context) => {
                element$.next(element);
                onRemovalComplete(element, context);
            };

            return element$.pipe(
                switchMap(element =>
                    timer(0).pipe(
                        map(() => null),
                        startWith(element),
                    ),
                ),
                share(),
            );
        },
    },
);
