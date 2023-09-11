import {inject, InjectionToken, NgZone} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiIsIos, tuiTypedFromEvent, tuiZoneOptimized} from '@taiga-ui/cdk';
import {tuiIsMobile} from '@taiga-ui/core/utils';
import {Observable} from 'rxjs';
import {delay, distinctUntilChanged, map, share, startWith} from 'rxjs/operators';

import {TUI_MEDIA} from './media';

export const TUI_IS_ANDROID_RES = new InjectionToken<Observable<boolean>>(
    `[TUI_IS_ANDROID_RES]`,
    {
        factory: () => {
            const win = inject(WINDOW);
            const media = inject(TUI_MEDIA);

            return tuiTypedFromEvent(win, `resize`).pipe(
                delay(0),
                share(),
                startWith(null),
                map(() => tuiIsMobile(win, media) && !tuiIsIos(win.navigator)),
                distinctUntilChanged(),
                tuiZoneOptimized(inject(NgZone)),
            );
        },
    },
);
