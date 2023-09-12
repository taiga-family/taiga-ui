import {inject} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils';
import {map} from 'rxjs/operators';

import {TUI_WINDOW_SIZE} from './window-size';

/**
 * @deprecated Use {@link TUI_WINDOW_SIZE} instead
 */
export const TUI_WINDOW_HEIGHT = tuiCreateTokenFromFactory(() =>
    inject(TUI_WINDOW_SIZE).pipe(map(({height}) => height)),
);
