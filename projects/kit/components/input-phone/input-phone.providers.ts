import {DOCUMENT} from '@angular/common';
import {InjectionToken} from '@angular/core';
import {tuiAsControl, tuiAsFocusableItemAccessor, TuiDestroyService} from '@taiga-ui/cdk';
import {tuiAsDataListHost} from '@taiga-ui/core';
import {fromEvent, merge, Observable} from 'rxjs';
import {mergeMap, startWith, takeUntil, windowToggle} from 'rxjs/operators';

import {TuiInputPhoneComponent} from './input-phone.component';

export const TUI_SELECTION_STREAM = new InjectionToken<Observable<unknown>>(
    `A stream of selection changes`,
);
export const TUI_INPUT_PHONE_PROVIDERS = [
    TuiDestroyService,
    tuiAsFocusableItemAccessor(TuiInputPhoneComponent),
    tuiAsControl(TuiInputPhoneComponent),
    tuiAsDataListHost(TuiInputPhoneComponent),
    {
        provide: TUI_SELECTION_STREAM,
        deps: [TuiDestroyService, DOCUMENT],
        useFactory: (
            destroy$: Observable<unknown>,
            documentRef: Document,
        ): Observable<unknown> => {
            return fromEvent(documentRef, `selectionchange`).pipe(
                windowToggle(
                    merge(
                        fromEvent(documentRef, `mouseup`),
                        fromEvent(documentRef, `keydown`),
                    ),
                    () => fromEvent(documentRef, `mousedown`),
                ),
                mergeMap(windowed$ => windowed$.pipe(startWith(null))),
                takeUntil(destroy$),
            );
        },
    },
];
