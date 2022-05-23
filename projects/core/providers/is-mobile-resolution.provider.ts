import {ElementRef, Provider, SkipSelf} from '@angular/core';
import {TUI_IS_MOBILE_RES} from '@taiga-ui/core/tokens';
import {Observable} from 'rxjs';

export function isMobileResFactory(
    mobile$: Observable<boolean>,
    {nativeElement}: ElementRef,
): Observable<boolean> {
    nativeElement['$.class._mobile'] = mobile$;

    return mobile$;
}

export const TUI_IS_MOBILE_RES_PROVIDER: Provider = {
    provide: TUI_IS_MOBILE_RES,
    deps: [[new SkipSelf(), TUI_IS_MOBILE_RES], ElementRef],
    useFactory: isMobileResFactory,
};
