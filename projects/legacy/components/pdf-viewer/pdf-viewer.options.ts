import {InjectionToken, type Provider} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

export const TUI_PDF_VIEWER_DEFAULT_OPTIONS: TuiPdfViewerOptions = {
    label: '',
    actions: '',
    data: undefined,
};

/**
 * Default parameters for PdfViewer component
 */
export const TUI_PDF_VIEWER_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_PDF_VIEWER_OPTIONS' : '',
    {
        factory: () => TUI_PDF_VIEWER_DEFAULT_OPTIONS,
    },
);

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
