import {Injectable, Provider} from '@angular/core';
import {AbstractTuiDialogService, TUI_DIALOGS} from '@taiga-ui/cdk';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiPreviewDialogComponent} from './preview-dialog.component';

@Injectable({providedIn: `root`})
export class TuiPreviewDialogService extends AbstractTuiDialogService<unknown> {
    readonly defaultOptions = {};
    readonly component = new PolymorpheusComponent(TuiPreviewDialogComponent);
}

export const PREVIEW_DIALOG_PROVIDER: Provider = {
    provide: TUI_DIALOGS,
    useExisting: TuiPreviewDialogService,
    multi: true,
};
