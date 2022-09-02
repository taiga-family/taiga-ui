import {InjectionToken} from '@angular/core';
import type {Observable} from 'rxjs';
import {EMPTY} from 'rxjs';

export const TUI_LOADED = new InjectionToken<Observable<unknown>>(
    `Stream that emits when loading is over`,
    {
        factory: () => EMPTY,
    },
);
