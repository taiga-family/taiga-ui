import {InjectionToken} from '@angular/core';
import {defer, Observable, of, timer} from 'rxjs';
import {switchMap} from 'rxjs/operators';

/**
 * Stream that emits if loading of page is over (for example, to begin scrollIntoView)
 */
export const TUI_DOC_PAGE_LOADED = new InjectionToken<Observable<boolean>>(
    `[TUI_DOC_PAGE_LOADED]`,
    {factory: () => defer(() => timer(200).pipe(switchMap(() => of(true))))},
);
