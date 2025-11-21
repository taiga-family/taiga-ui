import {Injectable} from '@angular/core';
import {TuiModalService} from '@taiga-ui/core/portals/modal';

import {TuiPreviewDialog} from './preview-dialog.component';

@Injectable({
    providedIn: 'root',
})
export class TuiPreviewDialogService extends TuiModalService<unknown> {
    protected readonly options = {};
    protected readonly content = TuiPreviewDialog;
}
