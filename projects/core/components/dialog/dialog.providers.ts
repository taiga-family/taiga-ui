import {DOCUMENT} from '@angular/common';
import {ElementRef, InjectionToken, Provider} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {
    getActualTarget,
    isCurrentTarget,
    tuiContainsOrAfter,
    TuiDestroyService,
    TuiDialog,
    tuiIsElement,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {TuiDialogOptions} from '@taiga-ui/core/interfaces';
import {tuiGetViewportWidth} from '@taiga-ui/core/utils/dom';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {EMPTY, merge, Observable} from 'rxjs';
import {filter, switchMap, take, takeUntil} from 'rxjs/operators';

export const TUI_DIALOGS_CLOSE = new InjectionToken<Observable<unknown>>(
    `A stream to close dialogs`,
    {
        factory: () => EMPTY,
    },
);

const SCROLLBAR_PLACEHOLDER = 17;

// eslint-disable-next-line @typescript-eslint/naming-convention
export function dialogCloseStreamFactory(
    documentRef: Document,
    windowRef: Window,
    {nativeElement}: ElementRef<HTMLElement>,
    close$: Observable<void>,
    destroy$: Observable<void>,
    {dismissible}: TuiDialog<TuiDialogOptions<unknown>, unknown>,
): Observable<unknown> {
    return dismissible
        ? merge(
              typedFromEvent(nativeElement, `click`).pipe(filter(isCurrentTarget)),
              typedFromEvent(documentRef, `keydown`).pipe(
                  filter(event => {
                      const key = event.key;
                      const target = getActualTarget(event);

                      return (
                          key === `Escape` &&
                          tuiIsElement(target) &&
                          (!tuiContainsOrAfter(nativeElement, target) ||
                              nativeElement.contains(target))
                      );
                  }),
              ),
              typedFromEvent(documentRef, `mousedown`).pipe(
                  filter(event => {
                      const target = getActualTarget(event);
                      const clientX = event.clientX;

                      return (
                          tuiIsElement(target) &&
                          tuiGetViewportWidth(windowRef) - clientX >
                              SCROLLBAR_PLACEHOLDER &&
                          !tuiContainsOrAfter(nativeElement, target)
                      );
                  }),
                  switchMap(() =>
                      typedFromEvent(documentRef, `mouseup`).pipe(
                          take(1),
                          filter(event => {
                              const target = getActualTarget(event);

                              return (
                                  tuiIsElement(target) &&
                                  !tuiContainsOrAfter(nativeElement, target)
                              );
                          }),
                      ),
                  ),
              ),
              close$,
          ).pipe(takeUntil(destroy$))
        : close$;
}

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
        useFactory: dialogCloseStreamFactory,
    },
];
