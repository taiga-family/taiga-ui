import {DOCUMENT} from '@angular/common';
import {ElementRef, InjectionToken, Provider} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {
    containsOrAfter,
    isCurrentTarget,
    TuiDestroyService,
    TuiDialog,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {TuiDialogOptions} from '@taiga-ui/core/interfaces';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {EMPTY, merge, Observable} from 'rxjs';
import {filter, switchMapTo, take, takeUntil} from 'rxjs/operators';

export const TUI_DIALOGS_CLOSE = new InjectionToken<Observable<unknown>>(
    'A stream to close dialogs',
    {
        factory: () => EMPTY,
    },
);

const SCROLLBAR_PLACEHOLDER = 17;

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
              typedFromEvent(nativeElement, 'click').pipe(filter(isCurrentTarget)),
              typedFromEvent(documentRef, 'keydown').pipe(
                  filter(
                      ({key, target}) =>
                          key === 'Escape' &&
                          target instanceof Element &&
                          (!containsOrAfter(nativeElement, target) ||
                              nativeElement.contains(target)),
                  ),
              ),
              typedFromEvent(documentRef, 'mousedown').pipe(
                  filter(
                      ({target, clientX}) =>
                          target instanceof Element &&
                          windowRef.innerWidth - clientX > SCROLLBAR_PLACEHOLDER &&
                          !containsOrAfter(nativeElement, target),
                  ),
                  switchMapTo(
                      typedFromEvent(documentRef, 'mouseup').pipe(
                          take(1),
                          filter(
                              ({target}) =>
                                  target instanceof Element &&
                                  !containsOrAfter(nativeElement, target),
                          ),
                      ),
                  ),
              ),
              close$,
          ).pipe(takeUntil(destroy$))
        : close$;
}

export const TUI_DIALOG_CLOSE_STREAM = new InjectionToken<Observable<unknown>>(
    'Dialogs closing stream',
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
