import {inject, InjectionToken, NgZone} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiTypedFromEvent, tuiZoneOptimized} from '@taiga-ui/cdk';
import {tuiIsMobile} from '@taiga-ui/core/utils';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map, share, startWith} from 'rxjs/operators';

import {TUI_MEDIA} from './media';

/**
 * @deprecated use {@link https://taiga-ui.dev/services/breakpoint-service TuiBreakpointService}
 * TODO: drop in v4.0
 * Mobile resolution stream for private providers
 */
export const TUI_IS_MOBILE_RES = new InjectionToken<Observable<boolean>>(
    `[TUI_IS_MOBILE_RES]`,
    {
        factory: () => {
            const windowRef = inject(WINDOW);
            const media = inject(TUI_MEDIA);

            return tuiTypedFromEvent(windowRef, `resize`).pipe(
                share(),
                startWith(null),
                map(() => tuiIsMobile(windowRef, media)),
                distinctUntilChanged(),
                tuiZoneOptimized(inject(NgZone)),
            );
        },
    },
);
