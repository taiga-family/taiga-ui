import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {typedFromEvent} from '@taiga-ui/cdk/observables';
import {getActualTarget, getDocumentOrShadowRoot} from '@taiga-ui/cdk/utils';
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
            const removedElement$ = inject(TUI_REMOVED_ELEMENT);
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
                    withLatestFrom(removedElement$),
                    filter(
                        ([{target}, removedElement]) =>
                            !removedElement || !removedElement.contains(target as Node),
                    ),
                    map(([{relatedTarget}]) => relatedTarget),
                ),
                blur$.pipe(
                    map(() => document.activeElement),
                    filter(element => !!element && element.matches('iframe')),
                ),
                focusin$.pipe(
                    switchMap(event => {
                        const target = getActualTarget(event);
                        const root = getDocumentOrShadowRoot(target);

                        return root === document
                            ? of(target)
                            : shadowRootActiveElement(root as Document);
                    }),
                ),
                mousedown$.pipe(
                    switchMap(event =>
                        !document.activeElement ||
                        document.activeElement === document.body
                            ? of(getActualTarget(event))
                            : focusout$.pipe(
                                  take(1),
                                  takeUntil(timer(0)),
                                  mapTo(getActualTarget(event)),
                              ),
                    ),
                ),
            ).pipe(distinctUntilChanged(), share());
        },
    },
);

function shadowRootActiveElement(root: Document): Observable<EventTarget | null> {
    return merge(
        typedFromEvent(root, 'focusin').pipe(map(({target}) => target)),
        typedFromEvent(root, 'focusout').pipe(map(({relatedTarget}) => relatedTarget)),
    );
}
