import {InjectionToken} from '@angular/core';
import type {SafeHtml} from '@angular/platform-browser';
import type {TuiHandler} from '@taiga-ui/cdk';
import {tuiSvgLinearGradientProcessor} from '@taiga-ui/cdk';

/**
 * Transform function the contents of the loaded svg file
 * @deprecated Use {@link TUI_SVG_OPTIONS} instead
 */
export const TUI_SVG_CONTENT_PROCESSOR = new InjectionToken<
    TuiHandler<SafeHtml | string, SafeHtml | string>
>(`[TUI_SVG_CONTENT_PROCESSOR]`, {
    factory: () => tuiSvgLinearGradientProcessor,
});
