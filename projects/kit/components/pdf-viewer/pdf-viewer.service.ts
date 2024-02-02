import {inject, Injectable} from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import {TuiBaseDialogContext, TuiPopoverService} from '@taiga-ui/cdk';
import {TUI_DIALOGS} from '@taiga-ui/core';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {TuiPdfViewerComponent} from './pdf-viewer.component';
import {TUI_PDF_VIEWER_OPTIONS, TuiPdfViewerOptions} from './pdf-viewer.options';

const DIALOG = new PolymorpheusComponent(TuiPdfViewerComponent);

type Content<G> = PolymorpheusContent<
    TuiBaseDialogContext<G> & TuiPdfViewerOptions<unknown>
>;

@Injectable({
    providedIn: 'root',
})
export class TuiPdfViewerService extends TuiPopoverService<TuiPdfViewerOptions<unknown>> {
    protected readonly items$ = inject(TUI_DIALOGS);
    protected readonly component = DIALOG;
    protected readonly options = {
        ...inject(TUI_PDF_VIEWER_OPTIONS),
        data: undefined,
    };

    override open<G>(
        content: Content<G> | SafeResourceUrl,
        options: Partial<TuiPdfViewerOptions<any>> = {},
    ): Observable<G> {
        return super.open(content as Content<G>, options);
    }
}
