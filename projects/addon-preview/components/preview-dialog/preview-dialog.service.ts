import {Injectable, Provider} from '@angular/core';
import {AbstractTuiDialogService, TUI_DIALOGS} from '@taiga-ui/cdk';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiPreviewDialogComponent} from './preview-dialog.component';

/**
 * @deprecated: use {@link TuiPreviewDialogService}
 * TODO: remove in v3.0
 */
@Injectable({providedIn: 'root'})
// eslint-disable-next-line @typescript-eslint/naming-convention
export class PreviewDialogService extends AbstractTuiDialogService<unknown> {
    readonly defaultOptions = {};
    readonly component = new PolymorpheusComponent(TuiPreviewDialogComponent);
}

export const PREVIEW_DIALOG_PROVIDER: Provider = {
    provide: TUI_DIALOGS,
    useExisting: PreviewDialogService,
    multi: true,
};

@Injectable({providedIn: 'root'})
export class TuiPreviewDialogService extends PreviewDialogService {}
