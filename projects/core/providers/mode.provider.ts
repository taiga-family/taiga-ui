import {ElementRef, Optional, Provider} from '@angular/core';
import {TuiModeDirective} from '@taiga-ui/core/directives/mode';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import {TuiBrightness} from '@taiga-ui/core/types';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/**
 * @deprecated: use {@link tuiModeFactory} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function modeFactory(
    mode: TuiModeDirective | null,
    {nativeElement}: ElementRef,
): Observable<TuiBrightness | null> {
    const mode$ = mode
        ? mode.change$.pipe(
              startWith(null),
              map(() => mode.mode),
          )
        : of(null);

    nativeElement[`$.data-mode.attr`] = mode$;

    return mode$;
}

export const MODE_PROVIDER: Provider = {
    provide: TUI_MODE,
    deps: [[new Optional(), TuiModeDirective], ElementRef],
    useFactory: modeFactory,
};

export const tuiModeFactory = modeFactory;
