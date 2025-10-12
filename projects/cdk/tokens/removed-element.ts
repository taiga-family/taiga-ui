import {ɵAnimationEngine as AnimationEngine} from '@angular/animations/browser';
import {inject, InjectionToken} from '@angular/core';
import {map, share, startWith, Subject, switchMap, timer} from 'rxjs';

/**
 * Element currently being removed by AnimationEngine
 */
export const TUI_REMOVED_ELEMENT = new InjectionToken(
    ngDevMode ? 'TUI_REMOVED_ELEMENT' : '',
    {
        factory: () => {
            const stub = {onRemovalComplete: () => {}};
            const element$ = new Subject<Element | null>();
            const engine = inject(AnimationEngine, {optional: true}) || stub;
            const {onRemovalComplete = stub.onRemovalComplete} = engine;

            engine.onRemovalComplete = (element, context) => {
                element$.next(element);
                onRemovalComplete.call(engine, element, context);
            };

            return element$.pipe(
                startWith(null),
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
