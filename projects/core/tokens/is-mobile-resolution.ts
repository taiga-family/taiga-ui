import {inject, InjectionToken} from '@angular/core';
import {TuiBreakpointService} from '@taiga-ui/core/services';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

/**
 * Mobile resolution stream for private providers
 */
export const TUI_IS_MOBILE_RES = new InjectionToken<Observable<boolean>>(
    `[TUI_IS_MOBILE_RES]`,
    {
        factory: () => {
            return inject(TuiBreakpointService).pipe(
                map(mediaKey => mediaKey === `mobile`),
            );
        },
    },
);
