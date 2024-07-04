import {DOCUMENT} from '@angular/common';
import {inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {
    tuiCreateTokenFromFactory,
    tuiGetActualTarget,
    tuiGetDocumentOrShadowRoot,
} from '@taiga-ui/cdk/utils';
import type {Observable} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    map,
    merge,
    of,
    repeat,
    share,
    startWith,
    switchMap,
    take,
    takeUntil,
    timer,
    withLatestFrom,
} from 'rxjs';

import {TUI_REMOVED_ELEMENT} from './removed-element';

// Checks if focusout event should be considered leaving active zone
function isValidFocusout(target: any, removedElement: Element | null = null): boolean {
    return (
        // Not due to switching tabs/going to DevTools
        tuiGetDocumentOrShadowRoot(target).activeElement !== target &&
        // Not due to button/input becoming disabled or under disabled fieldset
        !target.matches(':disabled') &&
        // Not due to element being removed from DOM
        !removedElement?.contains(target)
    );
}

function shadowRootActiveElement(root: Document): Observable<EventTarget | null> {
    return merge(
        tuiTypedFromEvent(root, 'focusin').pipe(map(({target}) => target)),
        tuiTypedFromEvent(root, 'focusout').pipe(
            filter(
                ({target, relatedTarget}) => !!relatedTarget && isValidFocusout(target),
            ),
            map(({relatedTarget}) => relatedTarget),
        ),
    );
}

/**
 * Active element on the document for ActiveZone
 */
export const TUI_ACTIVE_ELEMENT = tuiCreateTokenFromFactory<
    Observable<EventTarget | null>
>(() => {
    const removedElement$ = inject(TUI_REMOVED_ELEMENT);
    const win = inject(WINDOW);
    const doc = inject(DOCUMENT);
    const focusout$ = tuiTypedFromEvent(win, 'focusout', {capture: true});
    const focusin$ = tuiTypedFromEvent(win, 'focusin', {capture: true});
    const blur$ = tuiTypedFromEvent(win, 'blur');
    const mousedown$ = tuiTypedFromEvent(win, 'mousedown');
    const mouseup$ = tuiTypedFromEvent(win, 'mouseup');

    return merge(
        focusout$.pipe(
            takeUntil(mousedown$),
            repeat({delay: () => mouseup$}),
            withLatestFrom(removedElement$),
            filter(([event, removedElement]) =>
                isValidFocusout(tuiGetActualTarget(event), removedElement),
            ),
            map(([{relatedTarget}]) => relatedTarget),
        ),
        blur$.pipe(
            map(() => doc.activeElement),
            filter((element) => !!element?.matches('iframe')),
        ),
        focusin$.pipe(
            switchMap((event) => {
                const target = tuiGetActualTarget(event);
                const root = tuiGetDocumentOrShadowRoot(target) as Document;

                return root === doc
                    ? of(target)
                    : shadowRootActiveElement(root).pipe(startWith(target));
            }),
        ),
        mousedown$.pipe(
            switchMap((event) => {
                const actualTargetInCurrentTime = tuiGetActualTarget(event);

                return !doc.activeElement || doc.activeElement === doc.body
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
});
