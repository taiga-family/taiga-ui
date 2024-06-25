import {InjectionToken} from '@angular/core';
import type {Observable} from 'rxjs';

import type {TuiSheetRequiredProps} from './sheet';

/**
 * @deprecated: drop in v5.0
 * Sheet main component
 */
export const TUI_SHEET = new InjectionToken<TuiSheetRequiredProps>('[TUI_SHEET]');

/**
 * @deprecated: drop in v5.0
 * Current scrollTop of a sheet
 */
export const TUI_SHEET_SCROLL = new InjectionToken<Observable<number>>(
    '[TUI_SHEET_SCROLL]',
);

/**
 * @deprecated: drop in v5.0
 * The sheet is being dragged
 */
export const TUI_SHEET_DRAGGED = new InjectionToken<Observable<boolean>>(
    '[TUI_SHEET_DRAGGED]',
);
