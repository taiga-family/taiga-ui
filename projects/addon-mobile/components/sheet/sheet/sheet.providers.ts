import {DOCUMENT} from '@angular/common';
import {ElementRef, InjectionToken, NgZone, Provider} from '@angular/core';
import {TUI_IS_IOS, tuiZonefree, typedFromEvent} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {map, share} from 'rxjs/operators';
import {isoScrollFactory} from '../ios.hacks';

export const TUI_SHEET_SCROLL = new InjectionToken<number>(
    'Current scrollTop of a sheet',
);

export const TUI_SHEET_PROVIDERS: Provider[] = [
    {
        provide: TUI_SHEET_SCROLL,
        deps: [ElementRef, NgZone, DOCUMENT, TUI_IS_IOS],
        useFactory: sheetScrollFactory,
    },
];

export function sheetScrollFactory(
    {nativeElement}: ElementRef<HTMLElement>,
    ngZone: NgZone,
    documentRef: Document,
    isIos: boolean,
): Observable<number> {
    if (!isIos) {
        // Thank God!
        return typedFromEvent(nativeElement, 'scroll').pipe(
            map(() => nativeElement.scrollTop),
            tuiZonefree(ngZone),
            share(),
        );
    }

    return isoScrollFactory(nativeElement, documentRef, ngZone);
}
