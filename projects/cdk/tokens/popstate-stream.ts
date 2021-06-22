import {inject, InjectionToken} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {filter, map, shareReplay} from 'rxjs/operators';

export const TUI_POPSTATE_STREAM = new InjectionToken<Observable<boolean>>(
    'Is backward/forward browser navigation event stream',
    {
        providedIn: 'root',
        factory: () => {
            const router = inject(Router);

            return router.events.pipe(
                filter((e): e is NavigationStart => e instanceof NavigationStart),
                map(event => event.navigationTrigger === 'popstate'),
                shareReplay(1),
            );
        },
    },
);
