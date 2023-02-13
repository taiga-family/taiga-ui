import {ElementRef, Provider, SkipSelf} from '@angular/core';
import {TUI_IS_MOBILE_RES} from '@taiga-ui/core/tokens';
import {Observable} from 'rxjs';

export const TUI_IS_MOBILE_RES_PROVIDER: Provider = {
    provide: TUI_IS_MOBILE_RES,
    deps: [[new SkipSelf(), TUI_IS_MOBILE_RES], ElementRef],
    useFactory: (
        mobile$: Observable<boolean>,
        {nativeElement}: ElementRef,
    ): Observable<boolean> => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        nativeElement[`$.class._mobile`] = mobile$;

        return mobile$;
    },
};
