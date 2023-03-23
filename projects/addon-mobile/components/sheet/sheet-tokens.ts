import {InjectionToken} from '@angular/core';

import type {TuiSheetRequiredProps} from './sheet';

/**
 * Sheet main component
 */
export const TUI_SHEET = new InjectionToken<TuiSheetRequiredProps>(`[TUI_SHEET]`);

/**
 * Current scrollTop of a sheet
 */
export const TUI_SHEET_SCROLL = new InjectionToken<number>(`[TUI_SHEET_SCROLL]`);

/**
 * The sheet is being dragged
 */
export const TUI_SHEET_DRAGGED = new InjectionToken<boolean>(`[TUI_SHEET_DRAGGED]`);
