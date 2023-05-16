import {InjectionToken} from '@angular/core';
import {TuiHandler, TuiSafeHtml} from '@taiga-ui/cdk';
import {identity} from 'rxjs';

/**
 * Source path processor for svg
 * @deprecated Use {@link TUI_SVG_OPTIONS} instead
 */
export const TUI_SVG_SRC_PROCESSOR = new InjectionToken<
    TuiHandler<TuiSafeHtml, TuiSafeHtml>
>(`[TUI_SVG_SRC_PROCESSOR]`, {factory: () => identity});
