import {inject, Injectable} from '@angular/core';
import type {SafeResourceUrl} from '@angular/platform-browser';
import type {TuiBaseDialogContext} from '@taiga-ui/cdk';
import {AbstractTuiDialogService} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';

import {TuiPdfViewerComponent} from './pdf-viewer.component';
import {TUI_PDF_VIEWER_OPTIONS} from './pdf-viewer.tokens';
import type {TuiPdfViewerOptions} from './pdf-viewer-options';

const DIALOG = new PolymorpheusComponent(TuiPdfViewerComponent);

type Content<G> = PolymorpheusContent<
    TuiBaseDialogContext<G> & TuiPdfViewerOptions<unknown>
>;

@Injectable({
    providedIn: `root`,
})
export class TuiPdfViewerService extends AbstractTuiDialogService<
    TuiPdfViewerOptions<unknown>
> {
    protected readonly component = DIALOG;
    protected readonly defaultOptions: TuiPdfViewerOptions<unknown> = {
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
