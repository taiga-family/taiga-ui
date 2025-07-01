import {ɵAnimationEngine as AnimationEngine} from '@angular/animations/browser';
import {inject} from '@angular/core';
import {BehaviorSubject, map, share, startWith, switchMap, timer} from 'rxjs';
import {InjectionToken} from '@angular/core';

/**
 * Element currently being removed by AnimationEngine
 */
export const TUI_REMOVED_ELEMENT = new InjectionToken(
    ngDevMode ? 'TUI_REMOVED_ELEMENT' : '',
    {
        factory: () => {
            const stub = {onRemovalComplete: () => {}};
            const element$ = new BehaviorSubject<Element | null>(null);
            const engine = inject(AnimationEngine, {optional: true}) || stub;
            const {onRemovalComplete = stub.onRemovalComplete} = engine;

            engine.onRemovalComplete = (element, context) => {
                element$.next(element);
                onRemovalComplete.call(engine, element, context);
            };

            return element$.pipe(
                switchMap((element) =>
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
