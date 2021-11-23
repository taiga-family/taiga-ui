import {Injectable} from '@angular/core';
import {AbstractTuiDialogService} from '@taiga-ui/cdk';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TuiPdfViewerOptions} from './pdf-viewer-options';
import {TuiPdfViewerComponent} from './pdf-viewer.component';

const DIALOG = new PolymorpheusComponent(TuiPdfViewerComponent);
const DEFAULT_OPTIONS = {
    label: '',
    actions: '',
} as const;

@Injectable({
    providedIn: 'root',
})
export class TuiPdfViewerService extends AbstractTuiDialogService<
    TuiPdfViewerOptions<any>
> {
    protected readonly component = DIALOG;
    protected readonly defaultOptions: TuiPdfViewerOptions<any> = DEFAULT_OPTIONS as any;
}
