import {InjectionToken} from '@angular/core';
import type {SafeHtml} from '@angular/platform-browser';
import type {TuiHandler} from '@taiga-ui/cdk';
import {identity} from 'rxjs';

/**
 * Source path processor for svg
 * @deprecated Use {@link TUI_SVG_OPTIONS} instead
 */
export const TUI_SVG_SRC_PROCESSOR = new InjectionToken<
    TuiHandler<SafeHtml | string, SafeHtml | string>
>(`[TUI_SVG_SRC_PROCESSOR]`, {
    factory: () => identity,
});
