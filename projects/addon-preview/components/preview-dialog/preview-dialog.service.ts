import {Injectable, Provider} from '@angular/core';
import {AbstractTuiDialogService, TUI_DIALOGS} from '@taiga-ui/cdk';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {PreviewDialogOptions} from './preview-dialog-options';
import {PreviewDialogComponent} from './preview-dialog.component';

@Injectable({
    providedIn: 'root',
})
export class PreviewDialogService extends AbstractTuiDialogService<PreviewDialogOptions> {
    readonly defaultOptions = {
        heading: 'Are you sure?',
        buttons: ['Yes', 'No'],
    } as const;
    readonly component = new PolymorpheusComponent(PreviewDialogComponent);
}

// Add this provider to app module
export const PREVIEW_DIALOG_PROVIDER: Provider = {
    provide: TUI_DIALOGS,
    useExisting: PreviewDialogService,
    multi: true,
};
