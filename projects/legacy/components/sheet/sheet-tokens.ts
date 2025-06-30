import {InjectionToken} from '@angular/core';
import type {Observable} from 'rxjs';

import type {TuiSheetRequiredProps} from './sheet';

/**
 * @deprecated: drop in v5.0 use {@link TuiSheetDialog}
 * https://taiga-ui.dev/components/sheet-dialog
 */
export const TUI_SHEET = new InjectionToken<TuiSheetRequiredProps>('TUI_SHEET');

/**
 * @deprecated: drop in v5.0 use {@link TuiSheetDialog}
 * https://taiga-ui.dev/components/sheet-dialog
 */
export const TUI_SHEET_SCROLL = new InjectionToken<Observable<number>>(
    'TUI_SHEET_SCROLL',
);

/**
 * @deprecated: drop in v5.0 use {@link TuiSheetDialog}
 * https://taiga-ui.dev/components/sheet-dialog
 */
export const TUI_SHEET_DRAGGED = new InjectionToken<Observable<boolean>>(
    'TUI_SHEET_DRAGGED',
);
