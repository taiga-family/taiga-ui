import {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiPdfViewerOptions<I = undefined> {
    readonly actions: PolymorpheusContent<TuiPdfViewerOptions<I>>;
    readonly data: I;
    readonly label: string;
}

type TuiPdfViewerDefaultOptions = Omit<TuiPdfViewerOptions<unknown>, 'data'>;

export const TUI_PDF_VIEWER_DEFAULT_OPTIONS: TuiPdfViewerDefaultOptions = {
    label: ``,
    actions: ``,
};

/**
 * Default parameters for PdfViewer component
 */
export const TUI_PDF_VIEWER_OPTIONS = tuiCreateToken(TUI_PDF_VIEWER_DEFAULT_OPTIONS);

export function tuiPdfViewerOptionsProvider(
    options: Partial<TuiPdfViewerDefaultOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_PDF_VIEWER_OPTIONS,
        options,
        TUI_PDF_VIEWER_DEFAULT_OPTIONS,
    );
}
