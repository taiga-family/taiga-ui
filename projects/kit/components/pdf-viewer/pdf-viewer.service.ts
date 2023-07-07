import {inject, Injectable} from '@angular/core';
import {AbstractTuiDialogService} from '@taiga-ui/cdk';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiPdfViewerComponent} from './pdf-viewer.component';
import {TUI_PDF_VIEWER_OPTIONS} from './pdf-viewer.tokens';
import {TuiPdfViewerOptions} from './pdf-viewer-options';

const DIALOG = new PolymorpheusComponent(TuiPdfViewerComponent);

@Injectable({
    providedIn: `root`,
})
export class TuiPdfViewerService extends AbstractTuiDialogService<
    TuiPdfViewerOptions<any>
> {
    protected readonly component = DIALOG;
    protected readonly defaultOptions = {
        ...inject(TUI_PDF_VIEWER_OPTIONS),
        data: undefined,
    };
}
