import {inject, Injectable} from '@angular/core';
import {TuiModalService} from '@taiga-ui/core/components/modal';

import {TuiDialogComponent} from './dialog.component';
import {TUI_DIALOG_OPTIONS, type TuiDialogOptions} from './dialog.options';

@Injectable({
    providedIn: 'root',
})
export class TuiDialogService extends TuiModalService<TuiDialogOptions<any>> {
    protected readonly options = inject(TUI_DIALOG_OPTIONS);
    protected readonly content = TuiDialogComponent;
}
