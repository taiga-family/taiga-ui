import {inject, InjectionToken, NgZone} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiIsIos, tuiTypedFromEvent, tuiZoneOptimized} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {delay, distinctUntilChanged, map, share, startWith} from 'rxjs/operators';

export const TUI_IS_IOS_RES = new InjectionToken<Observable<boolean>>(
    `[TUI_IS_IOS_RES]`,
    {
        factory: () => {
            const win = inject(WINDOW);

            return tuiTypedFromEvent(win, `resize`).pipe(
                delay(0),
                share(),
                startWith(null),
                map(() => tuiIsIos(win.navigator)),
                distinctUntilChanged(),
                tuiZoneOptimized(inject(NgZone)),
            );
        },
    },
);
