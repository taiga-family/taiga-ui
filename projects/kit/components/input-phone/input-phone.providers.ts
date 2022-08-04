import {DOCUMENT} from '@angular/common';
import {forwardRef, InjectionToken} from '@angular/core';
import {
    AbstractTuiControl,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiDestroyService,
} from '@taiga-ui/cdk';
import {TUI_DATA_LIST_HOST} from '@taiga-ui/core';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {fromEvent, merge, Observable} from 'rxjs';
import {flatMap, startWith, takeUntil, windowToggle} from 'rxjs/operators';

import {TuiInputPhoneComponent} from './input-phone.component';

export const SELECTION_STREAM = new InjectionToken<Observable<unknown>>(
    `A stream of selection changes`,
);
export const INPUT_PHONE_PROVIDERS = [
    TuiDestroyService,
    FIXED_DROPDOWN_CONTROLLER_PROVIDER,
    {
        provide: AbstractTuiControl,
        useExisting: forwardRef(() => TuiInputPhoneComponent),
    },
    {
        provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
        useExisting: forwardRef(() => TuiInputPhoneComponent),
    },
    {
        provide: TUI_DATA_LIST_HOST,
        useExisting: forwardRef(() => TuiInputPhoneComponent),
    },
    {
        provide: SELECTION_STREAM,
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
                flatMap(windowed$ => windowed$.pipe(startWith(null))),
                takeUntil(destroy$),
            );
        },
    },
];
