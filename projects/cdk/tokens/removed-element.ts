import {ɵAnimationEngine} from '@angular/animations/browser';
import {inject, InjectFlags, InjectionToken} from '@angular/core';
import {BehaviorSubject, Observable, timer} from 'rxjs';
import {mapTo, share, startWith, switchMap} from 'rxjs/operators';

export const TUI_REMOVED_ELEMENT = new InjectionToken<Observable<Element | null>>(
    'Element currently being removed by AnimationEngine',
    {
        factory: () => {
            const stub = {onRemovalComplete: () => {}};
            const skip$ = new BehaviorSubject<Element | null>(null);
            const engine = ɵAnimationEngine
                ? inject(ɵAnimationEngine, InjectFlags.Optional) ?? stub
                : stub;
            const {onRemovalComplete = stub.onRemovalComplete} = engine;

            engine.onRemovalComplete = (element, context) => {
                skip$.next(element);
                onRemovalComplete(element, context);
            };

            return skip$.pipe(
                switchMap(element => timer(0).pipe(mapTo(null), startWith(element))),
                share(),
            );
        },
    },
);
