import {InjectionToken, ValueProvider} from '@angular/core';

import {TuiPdfViewerOptions} from './pdf-viewer-options';

type TuiPdfViewerDefaultOptions = Omit<TuiPdfViewerOptions<unknown>, 'data'>;

export const TUI_PDF_VIEWER_DEFAULT_OPTIONS = {label: ``, actions: ``};

export const TUI_PDF_VIEWER_OPTIONS = new InjectionToken<TuiPdfViewerDefaultOptions>(
    `[TUI_PDF_VIEWER_OPTIONS]: Default parameters for pdf viewer component`,
    {
        factory: () => TUI_PDF_VIEWER_DEFAULT_OPTIONS,
    },
);

export function tuiPdfViewerOptionsProvider(
    options: Partial<TuiPdfViewerDefaultOptions>,
): ValueProvider {
    return {
        provide: TUI_PDF_VIEWER_OPTIONS,
        useValue: {...TUI_PDF_VIEWER_DEFAULT_OPTIONS, ...options},
    };
}
