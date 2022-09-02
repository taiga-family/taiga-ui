import {Injectable} from '@angular/core';
import type {SafeResourceUrl} from '@angular/platform-browser';
import type {TuiBaseDialogContext} from '@taiga-ui/cdk';
import {AbstractTuiDialogService} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';

import {TuiPdfViewerComponent} from './pdf-viewer.component';
import type {TuiPdfViewerOptions} from './pdf-viewer-options';

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
