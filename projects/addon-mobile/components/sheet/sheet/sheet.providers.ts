import {ElementRef, InjectionToken, NgZone, Provider} from '@angular/core';
import {tuiZonefree, typedFromEvent} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {map, share} from 'rxjs/operators';

export const TUI_SHEET_SCROLL = new InjectionToken<number>(
    'Current scrollTop of a sheet',
);

export const TUI_SHEET_PROVIDERS: Provider[] = [
    {
        provide: TUI_SHEET_SCROLL,
        deps: [ElementRef, NgZone],
        useFactory: sheetScrollFactory,
    },
];

export function sheetScrollFactory(
    {nativeElement}: ElementRef<HTMLElement>,
    ngZone: NgZone,
): Observable<number> {
    return typedFromEvent(nativeElement, 'scroll').pipe(
        map(() => nativeElement.scrollTop),
        tuiZonefree(ngZone),
        share(),
    );
}
