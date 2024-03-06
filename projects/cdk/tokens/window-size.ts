import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import type {Observable} from 'rxjs';
import {map, shareReplay, startWith} from 'rxjs';

export const TUI_WINDOW_SIZE = new InjectionToken<Observable<DOMRect>>(
    '[TUI_WINDOW_SIZE]',
    {
        factory: () => {
            const w = inject(WINDOW);

            return tuiTypedFromEvent(w, 'resize').pipe(
                startWith(null),
                map(() => {
                    const width = Math.max(
                        w.document.documentElement.clientWidth || 0,
                        w.innerWidth || 0,
                        w.visualViewport?.width || 0,
                    );
                    const height = Math.max(
                        w.document.documentElement.clientHeight || 0,
                        w.innerHeight || 0,
                        w.visualViewport?.height || 0,
                    );
                    const rect = {
                        width,
                        height,
                        top: 0,
                        left: 0,
                        right: width,
                        bottom: height,
                        x: 0,
                        y: 0,
                    };

                    return {
                        ...rect,
                        toJSON: () => JSON.stringify(rect),
                    };
                }),
                shareReplay({bufferSize: 1, refCount: true}),
            );
        },
    },
);
