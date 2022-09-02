import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';
import {tuiTypedFromEvent} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
import {merge} from 'rxjs';
import {share, switchMapTo, takeUntil} from 'rxjs/operators';

export const TUI_SELECTION_STREAM = new InjectionToken<Observable<unknown>>(
    `A stream of possible selection changes`,
    {
        factory: () => {
            const documentRef = inject(DOCUMENT);

            return merge(
                tuiTypedFromEvent(documentRef, `selectionchange`),
                tuiTypedFromEvent(documentRef, `mouseup`),
                tuiTypedFromEvent(documentRef, `mousedown`).pipe(
                    switchMapTo(
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
