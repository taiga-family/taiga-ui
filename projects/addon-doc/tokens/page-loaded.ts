import {defer, of, switchMap, timer} from 'rxjs';
import {InjectionToken} from '@angular/core';

/**
 * Stream that emits if loading of page is over (for example, to begin scrollIntoView)
 */
export const TUI_DOC_PAGE_LOADED = new InjectionToken(
    ngDevMode ? 'TUI_DOC_PAGE_LOADED' : '',
    {
        factory: () => defer(() => timer(200).pipe(switchMap(() => of(true)))),
    },
);
