import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {typedFromEvent} from '@taiga-ui/cdk/observables';
import {merge, Observable} from 'rxjs';
import {filter, map, repeatWhen, share, takeUntil, withLatestFrom} from 'rxjs/operators';
import {TUI_REMOVED_ELEMENT} from './removed-element';

export const TUI_ACTIVE_ELEMENT = new InjectionToken<Observable<EventTarget | null>>(
    'Active element on the document for ActiveZone',
    {
        factory: () => {
            const skip$ = inject(TUI_REMOVED_ELEMENT);
            const windowRef = inject(WINDOW);
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
                    map(() => windowRef.document.activeElement),
                    filter(element => !!element && element.matches('iframe')),
                ),
                merge(mousedown$, focusin$).pipe(map(({target}) => target)),
            ).pipe(share());
        },
    },
);
