import {DOCUMENT} from '@angular/common';
import {inject, NgZone} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {tuiTypedFromEvent, tuiZonefreeScheduler} from '@taiga-ui/cdk/observables';
import {
    tuiCreateTokenFromFactory,
    tuiGetActualTarget,
    tuiGetDocumentOrShadowRoot,
    tuiIsElement,
    tuiIsNativeMouseFocusable,
} from '@taiga-ui/cdk/utils';
import type {Observable} from 'rxjs';
import {
    delay,
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
        !removedElement?.contains(target) &&
        // Not due to scrollable element became non-scrollable
        tuiIsNativeMouseFocusable(target)
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
    const win = inject(WA_WINDOW);
    const doc = inject(DOCUMENT);
    const zone = inject(NgZone);
    const focusout$ = tuiTypedFromEvent(win, 'focusout', {capture: true});
    const focusin$ = tuiTypedFromEvent(win, 'focusin', {capture: true});
    const blur$ = tuiTypedFromEvent(win, 'blur');
    const pointerdown$ = tuiTypedFromEvent(win, 'pointerdown');

    return merge(
        focusout$.pipe(
            // Click on the disabled element doesn't trigger `mouse{down,up}`, but it emits `focusout` and `pointer{down,up}` events
            takeUntil(pointerdown$),
            repeat({
                delay: () =>
                    tuiTypedFromEvent(win, 'pointerup').pipe(
                        delay(0), // Mouse device type triggers `focusout` BEFORE `pointerup`; touch – `focusout` AFTER `pointerup`
                    ),
            }),
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
        pointerdown$.pipe(
            map(tuiGetActualTarget),
            filter((target) => tuiIsElement(target) && !target.matches(':disabled')),
            switchMap((actualTargetInCurrentTime) => {
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
                          takeUntil(timer(0, tuiZonefreeScheduler(zone))),
                      );
            }),
        ),
    ).pipe(distinctUntilChanged(), share());
});
