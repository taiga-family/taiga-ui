import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';
import type {Observable} from 'rxjs';

import type {TuiSheetRequiredProps} from './sheet';

/**
 * @deprecated: drop in v5.0 use {@link TuiSheetDialog}
 * https://taiga-ui.dev/components/sheet-dialog
 */
export const TUI_SHEET = tuiCreateToken<TuiSheetRequiredProps>();

/**
 * @deprecated: drop in v5.0 use {@link TuiSheetDialog}
 * https://taiga-ui.dev/components/sheet-dialog
 */
export const TUI_SHEET_SCROLL = tuiCreateToken<Observable<number>>();

/**
 * @deprecated: drop in v5.0 use {@link TuiSheetDialog}
 * https://taiga-ui.dev/components/sheet-dialog
 */
export const TUI_SHEET_DRAGGED = tuiCreateToken<Observable<boolean>>();
