import {DOCUMENT} from '@angular/common';
import {InjectionToken} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {fromEvent, merge, Observable} from 'rxjs';
import {flatMap, startWith, takeUntil, windowToggle} from 'rxjs/operators';

export const SELECTION_STREAM = new InjectionToken<Observable<unknown>>(
    'A stream of selection changes',
);
export const INPUT_PHONE_PROVIDERS = [
    TuiDestroyService,
    FIXED_DROPDOWN_CONTROLLER_PROVIDER,
    {
        provide: SELECTION_STREAM,
        deps: [TuiDestroyService, DOCUMENT],
        useFactory: selectionStreamFactory,
    },
];

export function selectionStreamFactory(
    destroy$: Observable<unknown>,
    documentRef: Document,
): Observable<unknown> {
    return fromEvent(documentRef, 'selectionchange').pipe(
        windowToggle(
            merge(fromEvent(documentRef, 'mouseup'), fromEvent(documentRef, 'keydown')),
            () => fromEvent(documentRef, 'mousedown'),
        ),
        flatMap(windowed$ => windowed$.pipe(startWith(null))),
        takeUntil(destroy$),
    );
}
