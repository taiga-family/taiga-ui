import {ElementRef, NgZone, Provider} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiZoneOptimized} from '@taiga-ui/cdk';
import {TuiMedia} from '@taiga-ui/core/interfaces';
import {TUI_IS_MOBILE_RES, TUI_MEDIA} from '@taiga-ui/core/tokens';
import {fromEvent, Observable} from 'rxjs';
import {distinctUntilChanged, map, startWith} from 'rxjs/operators';

export function isMobileResFactory(
    windowRef: Window,
    {mobile}: TuiMedia,
    {nativeElement}: ElementRef,
    ngZone: NgZone,
): Observable<boolean> {
    const mobile$ = fromEvent(windowRef, 'resize').pipe(
        startWith(null),
        map(() => windowRef.innerWidth < mobile),
        distinctUntilChanged(),
        tuiZoneOptimized(ngZone),
    );

    nativeElement['$.class._mobile'] = mobile$;

    return mobile$;
}

export const TUI_IS_MOBILE_RES_PROVIDER: Provider = {
    provide: TUI_IS_MOBILE_RES,
    deps: [WINDOW, TUI_MEDIA, ElementRef, NgZone],
    useFactory: isMobileResFactory,
};
