import {DOCUMENT} from '@angular/common';
import {ElementRef, InjectionToken, Provider} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {containsOrAfter, TuiDestroyService, typedFromEvent} from '@taiga-ui/cdk';
import {merge, NEVER, Observable} from 'rxjs';
import {filter, switchMapTo, take, takeUntil} from 'rxjs/operators';

export const TUI_DIALOGS_CLOSE = new InjectionToken<Observable<unknown>>(
    'A stream to close dialogs',
    {
        factory: () => NEVER,
    },
);

const SCROLLBAR_PLACEHOLDER = 17;

export function dialogCloseStreamFactory(
    documentRef: Document,
    windowRef: Window,
    {nativeElement}: ElementRef<HTMLElement>,
    close$: Observable<void>,
    destroy$: Observable<void>,
): Observable<unknown> {
    return merge(
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
    ).pipe(takeUntil(destroy$));
}

export const TUI_DIALOG_CLOSE_STREAM = new InjectionToken<Observable<unknown>>(
    'Dialogs closing stream',
);
export const TUI_DIALOG_PROVIDERS: Provider[] = [
    TuiDestroyService,
    {
        provide: TUI_DIALOG_CLOSE_STREAM,
        deps: [DOCUMENT, WINDOW, ElementRef, TUI_DIALOGS_CLOSE, TuiDestroyService],
        useFactory: dialogCloseStreamFactory,
    },
];
