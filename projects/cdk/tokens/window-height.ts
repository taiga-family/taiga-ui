import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {Observable} from 'rxjs';
import {map, shareReplay, startWith} from 'rxjs/operators';

/**
 * Window height accounting for disappearing address bar
 */
export const TUI_WINDOW_HEIGHT = new InjectionToken<Observable<number>>(
    `[TUI_WINDOW_HEIGHT]`,
    {
        factory: () => {
            const win = inject(WINDOW);

            return tuiTypedFromEvent(win, `resize`).pipe(
                startWith(null),
                map(() => win.innerHeight),
                shareReplay({bufferSize: 1, refCount: true}),
            );
        },
    },
);
