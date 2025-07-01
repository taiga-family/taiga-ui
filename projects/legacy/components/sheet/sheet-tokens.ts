import type {Observable} from 'rxjs';

import type {TuiSheetRequiredProps} from './sheet';
import {InjectionToken} from '@angular/core';

/**
 * @deprecated: drop in v5.0 use {@link TuiSheetDialog}
 * https://taiga-ui.dev/components/sheet-dialog
 */
export const TUI_SHEET = new InjectionToken<TuiSheetRequiredProps>(
    ngDevMode ? 'TUI_SHEET' : '',
);

/**
 * @deprecated: drop in v5.0 use {@link TuiSheetDialog}
 * https://taiga-ui.dev/components/sheet-dialog
 */
export const TUI_SHEET_SCROLL = new InjectionToken<Observable<number>>(
    ngDevMode ? 'TUI_SHEET_SCROLL' : '',
);

/**
 * @deprecated: drop in v5.0 use {@link TuiSheetDialog}
 * https://taiga-ui.dev/components/sheet-dialog
 */
export const TUI_SHEET_DRAGGED = new InjectionToken<Observable<boolean>>(
    ngDevMode ? 'TUI_SHEET_DRAGGED' : '',
);
