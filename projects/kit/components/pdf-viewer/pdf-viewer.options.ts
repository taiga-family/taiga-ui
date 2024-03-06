import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export const TUI_PDF_VIEWER_DEFAULT_OPTIONS: TuiPdfViewerOptions = {
    label: '',
    actions: '',
    data: undefined,
};

/**
 * Default parameters for PdfViewer component
 */
export const TUI_PDF_VIEWER_OPTIONS = tuiCreateToken(TUI_PDF_VIEWER_DEFAULT_OPTIONS);

export function tuiPdfViewerOptionsProvider(
    options: Partial<TuiPdfViewerOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_PDF_VIEWER_OPTIONS,
        options,
        TUI_PDF_VIEWER_DEFAULT_OPTIONS,
    );
}

export interface TuiPdfViewerOptions<I = undefined> {
    readonly actions: PolymorpheusContent<TuiPdfViewerOptions<I>>;
    readonly data: I;
    readonly label: string;
}
