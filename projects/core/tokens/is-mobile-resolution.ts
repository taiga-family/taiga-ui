import {inject, InjectionToken, NgZone} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiZoneOptimized, typedFromEvent} from '@taiga-ui/cdk';
import {TUI_MEDIA} from '@taiga-ui/core/tokens/media';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map, share, startWith} from 'rxjs/operators';

export const TUI_IS_MOBILE_RES = new InjectionToken<Observable<boolean>>(
    'Mobile resolution stream for private providers',
    {
        factory: () => {
            const windowRef = inject(WINDOW);
            const {mobile} = inject(TUI_MEDIA);

            return typedFromEvent(windowRef, 'resize').pipe(
                startWith(null),
                map(() => windowRef.innerWidth < mobile),
                distinctUntilChanged(),
                tuiZoneOptimized(inject(NgZone)),
                share(),
            );
        },
    },
);
