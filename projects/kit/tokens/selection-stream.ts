import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';
import {fromEvent, merge, Observable} from 'rxjs';
import {mergeMap, share, startWith, windowToggle} from 'rxjs/operators';

export const TUI_SELECTION_STREAM = new InjectionToken<Observable<unknown>>(
    `A stream of selection changes`,
    {
        factory: () => {
            const documentRef = inject(DOCUMENT);

            return fromEvent(documentRef, `selectionchange`).pipe(
                windowToggle(
                    merge(
                        fromEvent(documentRef, `mouseup`),
                        fromEvent(documentRef, `keydown`),
                    ),
                    () => fromEvent(documentRef, `mousedown`),
                ),
                mergeMap(windowed$ => windowed$.pipe(startWith(null))),
                share(),
            );
        },
    },
);
