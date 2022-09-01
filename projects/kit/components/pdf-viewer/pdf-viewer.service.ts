import {Injectable} from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import {AbstractTuiDialogService, TuiBaseDialogContext} from '@taiga-ui/cdk';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {TuiPdfViewerComponent} from './pdf-viewer.component';
import {TuiPdfViewerOptions} from './pdf-viewer-options';

const DIALOG = new PolymorpheusComponent(TuiPdfViewerComponent);
const DEFAULT_OPTIONS = {label: ``, actions: ``} as const;

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
    protected readonly defaultOptions: TuiPdfViewerOptions<unknown> =
        DEFAULT_OPTIONS as TuiPdfViewerOptions<unknown>;

    override open<G>(
        content: SafeResourceUrl | Content<G>,
        options: Partial<TuiPdfViewerOptions<any>> = {},
    ): Observable<G> {
        return super.open(content as Content<G>, options);
    }
}
