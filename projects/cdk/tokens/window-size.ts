import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {Observable} from 'rxjs';
import {map, shareReplay, startWith} from 'rxjs/operators';

export const TUI_WINDOW_SIZE = new InjectionToken<Observable<ClientRect>>(
    `[TUI_WINDOW_SIZE]`,
    {
        factory: () => {
            const w = inject(WINDOW);

            return tuiTypedFromEvent(w, `resize`).pipe(
                startWith(null),
                map(() => {
                    const width = Math.max(w.innerWidth, w.visualViewport?.width || 0);
                    const height = Math.max(w.innerHeight, w.visualViewport?.height || 0);

                    return {
                        width,
                        height,
                        top: 0,
                        left: 0,
                        right: width,
                        bottom: height,
                    };
                }),
                shareReplay({bufferSize: 1, refCount: true}),
            );
        },
    },
);
