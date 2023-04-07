import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';
import {tuiTypedFromEvent} from '@taiga-ui/cdk';
import {merge, Observable} from 'rxjs';
import {share, switchMap, takeUntil} from 'rxjs/operators';

/**
 * A stream of possible selection changes
 */
export const TUI_SELECTION_STREAM = new InjectionToken<Observable<unknown>>(
    `[TUI_SELECTION_STREAM]`,
    {
        factory: () => {
            const doc = inject(DOCUMENT);

            return merge(
                tuiTypedFromEvent(doc, `selectionchange`),
                tuiTypedFromEvent(doc, `mouseup`),
                tuiTypedFromEvent(doc, `mousedown`).pipe(
                    switchMap(() =>
                        tuiTypedFromEvent(doc, `mousemove`).pipe(
                            takeUntil(tuiTypedFromEvent(doc, `mouseup`)),
                        ),
                    ),
                ),
                tuiTypedFromEvent(doc, `keydown`),
                tuiTypedFromEvent(doc, `keyup`),
            ).pipe(share());
        },
    },
);
