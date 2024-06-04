import {inject, Injectable} from '@angular/core';
import {TuiPopoverService} from '@taiga-ui/cdk';

import {TuiDialogComponent} from './dialog.component';
import {TUI_DIALOG_OPTIONS, TUI_DIALOGS} from './dialog.tokens';

@Injectable({
    providedIn: 'root',
    useFactory: () =>
        new TuiDialogService(TUI_DIALOGS, TuiDialogComponent, inject(TUI_DIALOG_OPTIONS)),
})
export class TuiDialogService<T = any> extends TuiPopoverService<T> {}
