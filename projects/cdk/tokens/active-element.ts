import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiGetActualTarget, tuiGetDocumentOrShadowRoot} from '@taiga-ui/cdk/utils';
import {merge, Observable, of, timer} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    map,
    repeatWhen,
    share,
    startWith,
    switchMap,
    take,
    takeUntil,
    withLatestFrom,
} from 'rxjs/operators';

import {TUI_REMOVED_ELEMENT} from './removed-element';

/**
 * Active element on the document for ActiveZone
 */
export const TUI_ACTIVE_ELEMENT = new InjectionToken<Observable<EventTarget | null>>(
    `[TUI_ACTIVE_ELEMENT]`,
    {
        factory: () => {
            const removedElement$ = inject(TUI_REMOVED_ELEMENT);
            const windowRef = inject(WINDOW);
            const documentRef = inject(DOCUMENT);
            const focusout$ = tuiTypedFromEvent(windowRef, `focusout`);
            const focusin$ = tuiTypedFromEvent(windowRef, `focusin`);
            const blur$ = tuiTypedFromEvent(windowRef, `blur`);
            const mousedown$ = tuiTypedFromEvent(windowRef, `mousedown`);
            const mouseup$ = tuiTypedFromEvent(windowRef, `mouseup`);

            return merge(
                focusout$.pipe(
                    // eslint-disable-next-line rxjs/no-unsafe-takeuntil
                    takeUntil(mousedown$),
                    /**
                     * TODO: replace to
                     * repeat({delay: () => mouseup$})
                     * in RxJS 7
                     */
                    // eslint-disable-next-line rxjs/no-ignored-notifier
                    repeatWhen(() => mouseup$),
                    withLatestFrom(removedElement$),
                    filter(([event, removedElement]) =>
                        isValidFocusout(tuiGetActualTarget(event), removedElement),
                    ),
                    map(([{relatedTarget}]) => relatedTarget),
                ),
                blur$.pipe(
                    map(() => documentRef.activeElement),
                    filter(element => !!element?.matches(`iframe`)),
                ),
                focusin$.pipe(
                    switchMap(event => {
                        const target = tuiGetActualTarget(event);
                        const root = tuiGetDocumentOrShadowRoot(target) as Document;

                        return root === documentRef
                            ? of(target)
                            : shadowRootActiveElement(root).pipe(startWith(target));
                    }),
                ),
                mousedown$.pipe(
                    switchMap(event => {
                        const actualTargetInCurrentTime = tuiGetActualTarget(event);

                        return !documentRef.activeElement ||
                            documentRef.activeElement === documentRef.body
                            ? of(actualTargetInCurrentTime)
                            : focusout$.pipe(
                                  take(1),
                                  map(
                                      /**
                                       * Do not use `map(() => tuiGetActualTarget(event))`
                                       * because we have different result in runtime
                                       */
                                      () => actualTargetInCurrentTime,
                                  ),
                                  takeUntil(timer(0)),
                              );
                    }),
                ),
            ).pipe(distinctUntilChanged(), share());
        },
    },
);

// Checks if focusout event should be considered leaving active zone
function isValidFocusout(target: any, removedElement: Element | null = null): boolean {
    return (
        // Not due to switching tabs/going to DevTools
        tuiGetDocumentOrShadowRoot(target).activeElement !== target &&
        // Not due to button/input becoming disabled
        !target.disabled &&
        // Not due to element being removed from DOM
        !removedElement?.contains(target)
    );
}

function shadowRootActiveElement(root: Document): Observable<EventTarget | null> {
    return merge(
        tuiTypedFromEvent(root, `focusin`).pipe(map(({target}) => target)),
        tuiTypedFromEvent(root, `focusout`).pipe(
            filter(
                ({target, relatedTarget}) => !!relatedTarget && isValidFocusout(target),
            ),
            map(({relatedTarget}) => relatedTarget),
        ),
    );
}
