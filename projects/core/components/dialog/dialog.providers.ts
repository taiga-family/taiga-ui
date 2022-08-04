import {DOCUMENT} from '@angular/common';
import {ElementRef, InjectionToken, Provider} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {
    tuiContainsOrAfter,
    TuiDestroyService,
    TuiDialog,
    tuiIsCurrentTarget,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import {TuiDialogOptions} from '@taiga-ui/core/interfaces';
import {tuiGetViewportWidth} from '@taiga-ui/core/utils/dom';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {EMPTY, merge, Observable} from 'rxjs';
import {filter, switchMapTo, take, takeUntil} from 'rxjs/operators';

export const TUI_DIALOGS_CLOSE = new InjectionToken<Observable<unknown>>(
    `A stream to close dialogs`,
    {
        factory: () => EMPTY,
    },
);

const SCROLLBAR_PLACEHOLDER = 17;

export const TUI_DIALOG_CLOSE_STREAM = new InjectionToken<Observable<unknown>>(
    `Dialogs closing stream`,
);
export const TUI_DIALOG_PROVIDERS: Provider[] = [
    TuiDestroyService,
    {
        provide: TUI_DIALOG_CLOSE_STREAM,
        deps: [
            DOCUMENT,
            WINDOW,
            ElementRef,
            TUI_DIALOGS_CLOSE,
            TuiDestroyService,
            POLYMORPHEUS_CONTEXT,
        ],
        useFactory: (
            documentRef: Document,
            windowRef: Window,
            {nativeElement}: ElementRef<HTMLElement>,
            close$: Observable<void>,
            destroy$: Observable<void>,
            {dismissible}: TuiDialog<TuiDialogOptions<unknown>, unknown>,
        ): Observable<unknown> => {
            return dismissible
                ? merge(
                      tuiTypedFromEvent(nativeElement, `click`).pipe(
                          filter(tuiIsCurrentTarget),
                      ),
                      tuiTypedFromEvent(documentRef, `keydown`).pipe(
                          // TODO: iframe warning
                          filter(
                              ({key, target}) =>
                                  key === `Escape` &&
                                  target instanceof Element &&
                                  (!tuiContainsOrAfter(nativeElement, target) ||
                                      nativeElement.contains(target)),
                          ),
                      ),
                      tuiTypedFromEvent(documentRef, `mousedown`).pipe(
                          // TODO: iframe warning
                          filter(
                              ({target, clientX}) =>
                                  target instanceof Element &&
                                  tuiGetViewportWidth(windowRef) - clientX >
                                      SCROLLBAR_PLACEHOLDER &&
                                  !tuiContainsOrAfter(nativeElement, target),
                          ),
                          switchMapTo(
                              tuiTypedFromEvent(documentRef, `mouseup`).pipe(
                                  take(1),
                                  // TODO: iframe warning
                                  filter(
                                      ({target}) =>
                                          target instanceof Element &&
                                          !tuiContainsOrAfter(nativeElement, target),
                                  ),
                              ),
                          ),
                      ),
                      close$,
                  ).pipe(takeUntil(destroy$))
                : close$;
        },
    },
];
