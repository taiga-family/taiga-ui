import {inject, Injectable} from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import {TuiPopoverContext, TuiPopoverService} from '@taiga-ui/cdk';
import {TUI_DIALOGS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {TuiPdfViewerComponent} from './pdf-viewer.component';
import {TUI_PDF_VIEWER_OPTIONS, TuiPdfViewerOptions} from './pdf-viewer.options';

type Content<G> = PolymorpheusContent<
    TuiPdfViewerOptions<unknown> & TuiPopoverContext<G>
>;

@Injectable({
    providedIn: 'root',
    useFactory: () =>
        new TuiPdfViewerService(
            TUI_DIALOGS,
            TuiPdfViewerComponent,
            inject(TUI_PDF_VIEWER_OPTIONS),
        ),
})
export class TuiPdfViewerService extends TuiPopoverService<TuiPdfViewerOptions<unknown>> {
    public override open<G>(
        content: Content<G> | SafeResourceUrl,
        options: Partial<TuiPdfViewerOptions<any>> = {},
    ): Observable<G> {
        return super.open(content as Content<G>, options);
    }
}
