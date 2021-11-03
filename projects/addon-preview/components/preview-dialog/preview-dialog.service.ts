import {Injectable, Provider} from '@angular/core';
import {AbstractTuiDialogService, TUI_DIALOGS} from '@taiga-ui/cdk';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {PreviewDialogComponent} from './preview-dialog.component';

@Injectable({
    providedIn: 'root',
})
export class PreviewDialogService extends AbstractTuiDialogService<{}> {
    readonly defaultOptions = {};
    readonly component = new PolymorpheusComponent(PreviewDialogComponent);
}

export const PREVIEW_DIALOG_PROVIDER: Provider = {
    provide: TUI_DIALOGS,
    useExisting: PreviewDialogService,
    multi: true,
};
