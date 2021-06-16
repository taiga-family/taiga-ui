import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {typedFromEvent} from '@taiga-ui/cdk/observables';
import {Observable} from 'rxjs';

export const TUI_BACKWARD_NAVIGATION_STREAM = new InjectionToken<
    Observable<PopStateEvent>
>('Routing backward navigation event stream', {
    factory: () => typedFromEvent(inject(WINDOW), 'popstate'),
});
