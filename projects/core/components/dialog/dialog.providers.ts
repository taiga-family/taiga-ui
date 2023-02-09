import {DOCUMENT} from '@angular/common';
import {ElementRef, InjectionToken, Provider} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {
    tuiContainsOrAfter,
    TuiDestroyService,
    TuiDialog,
    tuiGetActualTarget,
    tuiIsCurrentTarget,
    tuiIsElement,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import {TuiDialogOptions} from '@taiga-ui/core/interfaces';
import {tuiGetViewportWidth} from '@taiga-ui/core/utils/dom';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {EMPTY, isObservable, merge, Observable, of} from 'rxjs';
import {filter, switchMap, take} from 'rxjs/operators';

export const TUI_DIALOGS_CLOSE = new InjectionToken<Observable<unknown>>(
    `[TUI_DIALOGS_CLOSE]: A stream to close dialogs`,
    {
        factory: () => EMPTY,
    },
);

const SCROLLBAR_PLACEHOLDER = 17;

// TODO: Refactor this to be reusable in custom dialogs
export const TUI_DIALOG_CLOSE_STREAM = new InjectionToken<Observable<unknown>>(
    `[TUI_DIALOG_CLOSE_STREAM]: Dialogs closing stream`,
);
export const TUI_DIALOG_PROVIDERS: Provider[] = [
    TuiDestroyService,
    {
        provide: TUI_DIALOG_CLOSE_STREAM,
        deps: [DOCUMENT, WINDOW, ElementRef, TUI_DIALOGS_CLOSE, POLYMORPHEUS_CONTEXT],
        useFactory: (
            documentRef: Document,
            windowRef: Window,
            {nativeElement}: ElementRef<HTMLElement>,
            close$: Observable<void>,
            {dismissible}: TuiDialog<TuiDialogOptions<unknown>, unknown>,
        ): Observable<unknown> => {
            return dismissible
                ? merge(
                      merge(
                          tuiTypedFromEvent(nativeElement, `click`).pipe(
                              filter(tuiIsCurrentTarget),
                          ),
                          tuiTypedFromEvent(documentRef, `keydown`).pipe(
                              filter(event => {
                                  const key = event.key;
                                  const target = tuiGetActualTarget(event);

                                  return (
                                      key === `Escape` &&
                                      tuiIsElement(target) &&
                                      (!tuiContainsOrAfter(nativeElement, target) ||
                                          nativeElement.contains(target))
                                  );
                              }),
                          ),
                          tuiTypedFromEvent(documentRef, `mousedown`).pipe(
                              filter(event => {
                                  const target = tuiGetActualTarget(event);
                                  const clientX = event.clientX;

                                  return (
                                      tuiIsElement(target) &&
                                      tuiGetViewportWidth(windowRef) - clientX >
                                          SCROLLBAR_PLACEHOLDER &&
                                      !tuiContainsOrAfter(nativeElement, target)
                                  );
                              }),
                              switchMap(() =>
                                  tuiTypedFromEvent(documentRef, `mouseup`).pipe(
                                      take(1),
                                      filter(event => {
                                          const target = tuiGetActualTarget(event);

                                          return (
                                              tuiIsElement(target) &&
                                              !tuiContainsOrAfter(nativeElement, target)
                                          );
                                      }),
                                  ),
                              ),
                          ),
                      ).pipe(
                          switchMap(() =>
                              isObservable(dismissible)
                                  ? dismissible.pipe(take(1))
                                  : of(dismissible),
                          ),
                          filter(Boolean),
                      ),
                      close$,
                  )
                : close$;
        },
    },
];
