import {InjectionToken} from '@angular/core';
import {typedFromEvent} from '@taiga-ui/cdk/observables';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

export const TUI_BACKWARD_NAVIGATION_STREAM = new InjectionToken<
    Observable<PopStateEvent>
>('Routing backward navigation event stream');

export const backwardNavigationStreamFactory = (
    windowRef: Window,
    destroy$: Observable<void>,
) => {
    return typedFromEvent(windowRef, 'popstate').pipe(takeUntil(destroy$));
};
