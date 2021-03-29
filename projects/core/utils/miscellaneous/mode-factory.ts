import {ElementRef} from '@angular/core';
import {TuiModeDirective} from '@taiga-ui/core/directives/mode';
import {TuiBrightness} from '@taiga-ui/core/types';
import {EMPTY, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export function modeFactory(
    mode: TuiModeDirective | null,
    {nativeElement}: ElementRef,
): Observable<TuiBrightness | null> {
    const mode$ = mode
        ? mode.change$.pipe(
              startWith(null),
              map(() => mode.mode),
          )
        : EMPTY;

    return (nativeElement['$.data-mode.attr'] = mode$);
}
