import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';

import {TuiSheetRequiredProps} from './sheet';

/**
 * Sheet main component
 */
export const TUI_SHEET = new InjectionToken<TuiSheetRequiredProps>('[TUI_SHEET]');

/**
 * Current scrollTop of a sheet
 */
export const TUI_SHEET_SCROLL = new InjectionToken<Observable<number>>(
    '[TUI_SHEET_SCROLL]',
);

/**
 * The sheet is being dragged
 */
export const TUI_SHEET_DRAGGED = new InjectionToken<Observable<boolean>>(
    '[TUI_SHEET_DRAGGED]',
);
