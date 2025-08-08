import {inject, Injectable} from '@angular/core';
import {TuiPopoverService} from '@taiga-ui/cdk';
import {TUI_DIALOG_OPTIONS, TUI_DIALOGS, type TuiDialogOptions} from '@taiga-ui/core';

import {TuiCustomDialogComponent} from './custom-dialog.component';

@Injectable({
    providedIn: 'root',
    useFactory: () =>
        new CustomDialogService(
            TUI_DIALOGS,
            TuiCustomDialogComponent,
            inject(TUI_DIALOG_OPTIONS),
        ),
})
export class CustomDialogService extends TuiPopoverService<TuiDialogOptions<any>> {}
