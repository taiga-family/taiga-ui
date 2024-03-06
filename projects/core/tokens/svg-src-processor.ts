import type {TuiHandler, TuiSafeHtml} from '@taiga-ui/cdk';
import {tuiCreateToken} from '@taiga-ui/cdk';
import {identity} from 'rxjs';

/**
 * Source path processor for svg
 * @deprecated Use {@link TUI_SVG_OPTIONS} instead
 */
export const TUI_SVG_SRC_PROCESSOR =
    tuiCreateToken<TuiHandler<TuiSafeHtml, TuiSafeHtml>>(identity);
