import {InjectionToken} from '@angular/core';
import {TuiHandler, TuiSafeHtml, tuiSvgLinearGradientProcessor} from '@taiga-ui/cdk';

/**
 * Transform function the contents of the loaded svg file
 * @deprecated Use {@link TUI_SVG_OPTIONS} instead
 */
export const TUI_SVG_CONTENT_PROCESSOR = new InjectionToken<
    TuiHandler<TuiSafeHtml, TuiSafeHtml>
>(`[TUI_SVG_CONTENT_PROCESSOR]`, {factory: () => tuiSvgLinearGradientProcessor});
