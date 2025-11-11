import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

export const TUI_PDF_VIEWER_DEFAULT_OPTIONS: TuiPdfViewerOptions = {
    label: '',
    actions: '',
    data: undefined,
};

/**
 * Default parameters for PdfViewer component
 */
export const [TUI_PDF_VIEWER_OPTIONS, tuiPdfViewerOptionsProvider] = tuiCreateOptions(
    TUI_PDF_VIEWER_DEFAULT_OPTIONS,
);

export interface TuiPdfViewerOptions<I = undefined> {
    readonly actions: PolymorpheusContent<TuiPdfViewerOptions<I>>;
    readonly data: I;
    readonly label: string;
}
