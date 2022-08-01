import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {typedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiGetActualTarget, tuiGetDocumentOrShadowRoot} from '@taiga-ui/cdk/utils';
import {merge, Observable, of, timer} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    map,
    mapTo,
    repeatWhen,
    share,
    startWith,
    switchMap,
    take,
    takeUntil,
    withLatestFrom,
} from 'rxjs/operators';

import {TUI_REMOVED_ELEMENT} from './removed-element';

export const TUI_ACTIVE_ELEMENT = new InjectionToken<Observable<EventTarget | null>>(
    `Active element on the document for ActiveZone`,
    {
        factory: () => {
            const removedElement$ = inject(TUI_REMOVED_ELEMENT);
            const windowRef = inject(WINDOW);
            const documentRef = inject(DOCUMENT);
            const focusout$ = typedFromEvent(windowRef, `focusout`);
            const focusin$ = typedFromEvent(windowRef, `focusin`);
            const blur$ = typedFromEvent(windowRef, `blur`);
            const mousedown$ = typedFromEvent(windowRef, `mousedown`);
            const mouseup$ = typedFromEvent(windowRef, `mouseup`);

            return merge(
                focusout$.pipe(
                    // eslint-disable-next-line rxjs/no-unsafe-takeuntil
                    takeUntil(mousedown$),
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
                    filter(element => !!element && element.matches(`iframe`)),
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
                    switchMap(event =>
                        !documentRef.activeElement ||
                        documentRef.activeElement === documentRef.body
                            ? of(tuiGetActualTarget(event))
                            : focusout$.pipe(
                                  take(1),
                                  mapTo(tuiGetActualTarget(event)),
                                  takeUntil(timer(0)),
                              ),
                    ),
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
        (!removedElement || !removedElement.contains(target))
    );
}

function shadowRootActiveElement(root: Document): Observable<EventTarget | null> {
    return merge(
        typedFromEvent(root, `focusin`).pipe(map(({target}) => target)),
        typedFromEvent(root, `focusout`).pipe(
            filter(
                ({target, relatedTarget}) => !!relatedTarget && isValidFocusout(target),
            ),
            map(({relatedTarget}) => relatedTarget),
        ),
    );
}
