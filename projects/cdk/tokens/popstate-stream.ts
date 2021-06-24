import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {typedFromEvent} from '@taiga-ui/cdk/observables';
import {Observable} from 'rxjs';

export const TUI_POPSTATE_STREAM = new InjectionToken<Observable<PopStateEvent>>(
    'Backward/forward browser navigation event stream',
    {
        factory: () => typedFromEvent(inject(WINDOW), 'popstate'),
    },
);
