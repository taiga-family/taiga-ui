import {DOCUMENT} from '@angular/common';
import {inject} from '@angular/core';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';
import type {Observable} from 'rxjs';
import {merge, share, switchMap, takeUntil} from 'rxjs';

/**
 * A stream of possible selection changes
 */
export const TUI_SELECTION_STREAM = tuiCreateTokenFromFactory<Observable<unknown>>(() => {
    const doc = inject(DOCUMENT);

    return merge(
        tuiTypedFromEvent(doc, 'selectionchange'),
        tuiTypedFromEvent(doc, 'pointerup'),
        tuiTypedFromEvent(doc, 'pointerdown').pipe(
            switchMap(() =>
                tuiTypedFromEvent(doc, 'pointermove').pipe(
                    takeUntil(tuiTypedFromEvent(doc, 'pointerup')),
                ),
            ),
        ),
        tuiTypedFromEvent(doc, 'keydown'),
        tuiTypedFromEvent(doc, 'keyup'),
    ).pipe(share());
});
