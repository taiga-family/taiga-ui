import {InjectionToken} from '@angular/core';
import {EMPTY, Observable} from 'rxjs';

/**
 * Stream that emits when loading is over
 */
export const TUI_LOADED = new InjectionToken<Observable<unknown>>(`[TUI_LOADED]`, {
    factory: () => EMPTY,
});
