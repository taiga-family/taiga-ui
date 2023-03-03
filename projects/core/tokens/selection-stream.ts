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
            const documentRef = inject(DOCUMENT);

            return merge(
                tuiTypedFromEvent(documentRef, `selectionchange`),
                tuiTypedFromEvent(documentRef, `mouseup`),
                tuiTypedFromEvent(documentRef, `mousedown`).pipe(
                    switchMap(() =>
                        tuiTypedFromEvent(documentRef, `mousemove`).pipe(
                            takeUntil(tuiTypedFromEvent(documentRef, `mouseup`)),
                        ),
                    ),
                ),
                tuiTypedFromEvent(documentRef, `keydown`),
                tuiTypedFromEvent(documentRef, `keyup`),
            ).pipe(share());
        },
    },
);
