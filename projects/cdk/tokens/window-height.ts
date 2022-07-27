import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {typedFromEvent} from '@taiga-ui/cdk/observables';
import {Observable} from 'rxjs';
import {map, shareReplay, startWith} from 'rxjs/operators';

export const TUI_WINDOW_HEIGHT = new InjectionToken<Observable<number>>(
    `Window height accounting for disappearing address bar`,
    {
        factory: () => {
            const windowRef = inject(WINDOW);

            return typedFromEvent(windowRef, `resize`).pipe(
                startWith(null),
                map(() => windowRef.innerHeight),
                shareReplay({bufferSize: 1, refCount: true}),
            );
        },
    },
);
