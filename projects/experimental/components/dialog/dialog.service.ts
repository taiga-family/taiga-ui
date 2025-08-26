import {inject, Injectable} from '@angular/core';
import {TuiPopoverService} from '@taiga-ui/cdk/services';
import {TUI_DIALOGS} from '@taiga-ui/core/components/dialog';

import {TuiDialogComponent} from './dialog.component';
import {TUI_DIALOG_OPTIONS, type TuiDialogOptions} from './dialog.options';

@Injectable({
    providedIn: 'root',
    useFactory: () =>
        new TuiDialogService(TUI_DIALOGS, TuiDialogComponent, inject(TUI_DIALOG_OPTIONS)),
})
export class TuiDialogService extends TuiPopoverService<TuiDialogOptions<any>> {}
