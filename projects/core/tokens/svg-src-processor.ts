import {InjectionToken} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import {TuiHandler} from '@taiga-ui/cdk';
import {identity} from 'rxjs';

export const TUI_SVG_SRC_PROCESSOR = new InjectionToken<
    TuiHandler<SafeHtml | string, SafeHtml | string>
>(`[TUI_SVG_SRC_PROCESSOR]: Source path processor for svg`, {
    factory: () => identity,
});
