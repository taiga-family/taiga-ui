import {Injectable} from '@angular/core';
import {TuiPopoverService} from '@taiga-ui/cdk';
import {TUI_DIALOGS} from '@taiga-ui/core';

import {TuiPreviewDialogComponent} from './preview-dialog.component';

@Injectable({
    providedIn: 'root',
    useFactory: () => new TuiPreviewDialogService(TUI_DIALOGS, TuiPreviewDialogComponent),
})
export class TuiPreviewDialogService extends TuiPopoverService<unknown> {}
