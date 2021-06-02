import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {typedFromEvent} from '@taiga-ui/cdk/observables';
import {merge, Observable, of, timer} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    map,
    mapTo,
    repeatWhen,
    share,
    switchMap,
    take,
    takeUntil,
    withLatestFrom,
} from 'rxjs/operators';
import {TUI_REMOVED_ELEMENT} from './removed-element';

export const TUI_ACTIVE_ELEMENT = new InjectionToken<Observable<EventTarget | null>>(
    'Active element on the document for ActiveZone',
    {
        factory: () => {
            const skip$ = inject(TUI_REMOVED_ELEMENT);
            const windowRef = inject(WINDOW);
            const {document} = windowRef;
            const focusout$ = typedFromEvent(windowRef, 'focusout');
            const focusin$ = typedFromEvent(windowRef, 'focusin');
            const blur$ = typedFromEvent(windowRef, 'blur');
            const mousedown$ = typedFromEvent(windowRef, 'mousedown');
            const mouseup$ = typedFromEvent(windowRef, 'mouseup');

            return merge(
                focusout$.pipe(
                    takeUntil(mousedown$),
                    repeatWhen(() => mouseup$),
                    withLatestFrom(skip$),
                    filter(([{target}, element]) => target !== element),
                    map(([{relatedTarget}]) => relatedTarget),
                ),
                blur$.pipe(
                    map(() => document.activeElement),
                    filter(element => !!element && element.matches('iframe')),
                ),
                focusin$.pipe(map(({target}) => target)),
                mousedown$.pipe(
                    switchMap(({target}) =>
                        !document.activeElement ||
                        document.activeElement === document.body
                            ? of(target)
                            : focusout$.pipe(take(1), takeUntil(timer(0)), mapTo(target)),
                    ),
                ),
            ).pipe(distinctUntilChanged(), share());
        },
    },
);
