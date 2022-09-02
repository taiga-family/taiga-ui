import type {Provider} from '@angular/core';
import {ElementRef, Optional} from '@angular/core';
import {TuiModeDirective} from '@taiga-ui/core/directives/mode';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import type {TuiBrightness} from '@taiga-ui/core/types';
import type {Observable} from 'rxjs';
import {of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export const MODE_PROVIDER: Provider = {
    provide: TUI_MODE,
    deps: [[new Optional(), TuiModeDirective], ElementRef],
    useFactory: (
        mode: TuiModeDirective | null,
        {nativeElement}: ElementRef,
    ): Observable<TuiBrightness | null> => {
        const mode$ = mode
            ? mode.change$.pipe(
                  startWith(null),
                  map(() => mode.mode),
              )
            : of(null);

        nativeElement[`$.data-mode.attr`] = mode$;

        return mode$;
    },
};
