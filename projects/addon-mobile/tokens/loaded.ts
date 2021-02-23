import {InjectionToken} from '@angular/core';
import {EMPTY, Observable} from 'rxjs';

export const TUI_LOADED = new InjectionToken<Observable<unknown>>(
    'Stream that emits when loading is over',
    {
        factory: () => EMPTY,
    },
);
