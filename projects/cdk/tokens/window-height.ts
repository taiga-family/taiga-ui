import {inject, InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {TUI_WINDOW_SIZE} from './window-size';

/**
 * @deprecated Use {@link TUI_WINDOW_SIZE} instead
 */
export const TUI_WINDOW_HEIGHT = new InjectionToken<Observable<number>>(
    `[TUI_WINDOW_HEIGHT]`,
    {
        factory: () => inject(TUI_WINDOW_SIZE).pipe(map(({height}) => height)),
    },
);
