import type {TuiHandler, TuiSafeHtml} from '@taiga-ui/cdk';
import {tuiCreateToken, tuiSvgLinearGradientProcessor} from '@taiga-ui/cdk';

/**
 * Transform function the contents of the loaded svg file
 * @deprecated Use {@link TUI_SVG_OPTIONS} instead
 */
export const TUI_SVG_CONTENT_PROCESSOR = tuiCreateToken<
    TuiHandler<TuiSafeHtml, TuiSafeHtml>
>(tuiSvgLinearGradientProcessor);
