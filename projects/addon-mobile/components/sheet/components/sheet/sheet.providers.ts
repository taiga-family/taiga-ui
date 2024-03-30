import {DOCUMENT} from '@angular/common';
import type {Provider} from '@angular/core';
import {ElementRef, forwardRef, NgZone} from '@angular/core';
import {
    TUI_FALSE_HANDLER,
    TUI_IS_IOS,
    TUI_TRUE_HANDLER,
    tuiTypedFromEvent,
    tuiZonefree,
} from '@taiga-ui/cdk';
import {TUI_SCROLL_REF} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {map, merge, share} from 'rxjs';

import {iosScrollFactory} from '../../ios.hacks';
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
    {
        provide: TUI_SCROLL_REF,
        useExisting: ElementRef,
    },
    {
        provide: TUI_SHEET,
        useExisting: forwardRef(() => TuiSheetComponent),
    },
];
