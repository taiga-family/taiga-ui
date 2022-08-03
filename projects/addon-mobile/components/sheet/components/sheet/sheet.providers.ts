import {DOCUMENT} from '@angular/common';
import {ElementRef, forwardRef, NgZone, Provider} from '@angular/core';
import {TUI_IS_IOS, tuiTypedFromEvent, tuiZonefree} from '@taiga-ui/cdk';
import {TUI_SCROLL_REF} from '@taiga-ui/core';
import {merge, Observable} from 'rxjs';
import {map, mapTo, share} from 'rxjs/operators';

import {iosScrollFactory} from '../../ios.hacks';
import {TUI_SHEET, TUI_SHEET_DRAGGED, TUI_SHEET_SCROLL} from '../../sheet-tokens';
import {TuiSheetComponent} from './sheet.component';

export const TUI_SHEET_PROVIDERS: Provider[] = [
    {
        provide: TUI_SHEET_DRAGGED,
        deps: [ElementRef],
        useFactory: sheetDraggedFactory,
    },
    {
        provide: TUI_SHEET_SCROLL,
        deps: [ElementRef, NgZone, DOCUMENT, TUI_IS_IOS],
        useFactory: sheetScrollFactory,
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

// eslint-disable-next-line @typescript-eslint/naming-convention
export function sheetDraggedFactory({
    nativeElement,
}: ElementRef<HTMLElement>): Observable<boolean> {
    return merge(
        tuiTypedFromEvent(nativeElement, `touchstart`, {passive: true}).pipe(mapTo(true)),
        tuiTypedFromEvent(nativeElement, `touchend`).pipe(mapTo(false)),
    );
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function sheetScrollFactory(
    {nativeElement}: ElementRef<HTMLElement>,
    ngZone: NgZone,
    documentRef: Document,
    isIos: boolean,
): Observable<number> {
    return isIos
        ? iosScrollFactory(nativeElement, documentRef, ngZone)
        : merge(
              tuiTypedFromEvent(nativeElement, `scroll`),
              tuiTypedFromEvent(nativeElement, `load`, {capture: true}),
          ).pipe(
              map(() => nativeElement.scrollTop),
              tuiZonefree(ngZone),
              share(),
          );
}
