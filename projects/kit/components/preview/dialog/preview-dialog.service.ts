import {Injectable} from '@angular/core';
import {TuiPopoverService} from '@taiga-ui/cdk/services';
import {TUI_DIALOGS} from '@taiga-ui/core/components/dialog';

import {TuiPreviewDialog} from './preview-dialog.component';

@Injectable({
    providedIn: 'root',
    useFactory: () => new TuiPreviewDialogService(TUI_DIALOGS, TuiPreviewDialog),
})
export class TuiPreviewDialogService extends TuiPopoverService<unknown> {}
