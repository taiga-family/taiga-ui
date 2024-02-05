import {ɵAnimationEngine as AnimationEngine} from '@angular/animations/browser';
import {inject, InjectFlags} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils';
import {BehaviorSubject, map, share, startWith, switchMap, timer} from 'rxjs';

/**
 * Element currently being removed by AnimationEngine
 */
export const TUI_REMOVED_ELEMENT = tuiCreateTokenFromFactory(() => {
    const stub = {onRemovalComplete: () => {}};
    const element$ = new BehaviorSubject<Element | null>(null);
    const engine = inject(AnimationEngine, InjectFlags.Optional) || stub;
    const {onRemovalComplete = stub.onRemovalComplete} = engine;

    engine.onRemovalComplete = (element, context) => {
        element$.next(element);
        onRemovalComplete.call(engine, element, context);
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
});
