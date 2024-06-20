import {DOCUMENT} from '@angular/common';
import type {Provider} from '@angular/core';
import {ElementRef, forwardRef, NgZone} from '@angular/core';
import {TUI_FALSE_HANDLER, TUI_TRUE_HANDLER} from '@taiga-ui/cdk/constants';
import {tuiTypedFromEvent, tuiZonefree} from '@taiga-ui/cdk/observables';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import type {Observable} from 'rxjs';
import {concat, delay, map, merge, share, switchMap, take, takeUntil, zip} from 'rxjs';

import {TUI_SHEET, TUI_SHEET_DRAGGED, TUI_SHEET_SCROLL} from '../../sheet-tokens';
import {TuiSheetComponent} from './sheet.component';

export const TUI_SHEET_PROVIDERS: Provider[] = [
    {
        provide: TUI_SHEET_DRAGGED,
        deps: [ElementRef],
        useFactory: ({nativeElement}: ElementRef<HTMLElement>): Observable<boolean> =>
            merge(
                tuiTypedFromEvent(nativeElement, 'touchstart', {passive: true}).pipe(
                    map(TUI_TRUE_HANDLER),
                ),
                tuiTypedFromEvent(nativeElement, 'touchend').pipe(map(TUI_FALSE_HANDLER)),
            ),
    },
    {
        provide: TUI_SHEET_SCROLL,
        deps: [ElementRef, NgZone, DOCUMENT, TUI_IS_IOS],
        useFactory: (
            {nativeElement}: ElementRef<HTMLElement>,
            zone: NgZone,
            doc: Document,
            isIos: boolean,
        ): Observable<number> =>
            isIos
                ? iosScrollFactory(nativeElement, doc, zone)
                : merge(
                      tuiTypedFromEvent(nativeElement, 'scroll'),
                      tuiTypedFromEvent(nativeElement, 'load', {capture: true}),
                  ).pipe(
                      map(() => nativeElement.scrollTop),
                      tuiZonefree(zone),
                      share(),
                  ),
    },
    tuiProvide(TUI_SCROLL_REF, ElementRef),
    tuiProvide(
        TUI_SHEET,
        forwardRef(() => TuiSheetComponent),
    ),
];

function iosScrollFactory(
    element: HTMLElement,
    doc: Document,
    zone: NgZone,
): Observable<number> {
    const load$ = tuiTypedFromEvent(element, 'load', {capture: true});
    const touchstart$ = tuiTypedFromEvent(element, 'touchstart', {passive: true});
    const touchmove$ = tuiTypedFromEvent(doc, 'touchmove', {passive: true});
    const touchend$ = tuiTypedFromEvent(doc, 'touchend');
    const scroll$ = tuiTypedFromEvent(element, 'scroll').pipe(
        map(() => element.scrollTop),
    );
    const result$ = merge(
        load$.pipe(
            delay(0),
            map(() => element.scrollTop),
        ),
        touchstart$.pipe(
            switchMap(({touches}) => {
                const {screenY} = touches[0];
                const {scrollTop} = element;

                return concat(
                    // Sometimes touch is triggered without scroll in iOS, filter that
                    zip(touchmove$, scroll$).pipe(
                        map(([{touches}]) => scrollTop + screenY - touches[0].screenY),
                        takeUntil(touchend$),
                    ),
                    scroll$,
                );
            }),
        ),
    );

    return concat(scroll$.pipe(take(1)), result$).pipe(tuiZonefree(zone), share());
}
