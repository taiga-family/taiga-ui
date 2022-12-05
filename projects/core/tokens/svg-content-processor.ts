import {InjectionToken} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import {TuiHandler, tuiSvgLinearGradientProcessor} from '@taiga-ui/cdk';

export const TUI_SVG_CONTENT_PROCESSOR = new InjectionToken<
    TuiHandler<SafeHtml | string, SafeHtml | string>
>(`[TUI_SVG_CONTENT_PROCESSOR]: Transform function the contents of the loaded svg file`, {
    factory: () => tuiSvgLinearGradientProcessor,
});
