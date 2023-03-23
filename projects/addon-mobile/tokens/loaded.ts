import {InjectionToken} from '@angular/core';
import type {Observable} from 'rxjs';
import {EMPTY} from 'rxjs';

/**
 * Stream that emits when loading is over
 */
export const TUI_LOADED = new InjectionToken<Observable<unknown>>(`[TUI_LOADED]`, {
    factory: () => EMPTY,
});
