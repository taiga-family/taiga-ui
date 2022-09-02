import {InjectionToken} from '@angular/core';
import type {Observable} from 'rxjs';
import {defer, of, timer} from 'rxjs';
import {switchMapTo} from 'rxjs/operators';

export const TUI_DOC_PAGE_LOADED = new InjectionToken<Observable<boolean>>(
    `[TUI_DOC_PAGE_LOADED] Stream that emits if loading of page is over (for example, to begin scrollIntoView)`,
    {factory: () => defer(() => timer(200).pipe(switchMapTo(of(true))))},
);
