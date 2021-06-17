import {inject, InjectionToken} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {ReplaySubject} from 'rxjs';
import {filter} from 'rxjs/operators';

export const TUI_IS_BACK_FORWARD_NAVIGATION_STREAM = new InjectionToken<
    ReplaySubject<boolean>
>('Is backward/forward browser navigation event stream', {
    providedIn: 'root',
    factory: () => {
        const router = inject(Router);
        const isLastPopState$ = new ReplaySubject<boolean>(1);

        router.events
            .pipe(filter((e): e is NavigationStart => e instanceof NavigationStart))
            .subscribe(e => {
                isLastPopState$.next(e.navigationTrigger === 'popstate');
            });

        return isLastPopState$;
    },
});
