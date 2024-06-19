import {inject, Injectable} from '@angular/core';
import {TuiPopoverService} from '@taiga-ui/cdk/services';

import {TuiDialogComponent} from './dialog.component';
import type {TuiDialogOptions} from './dialog.interfaces';
import {TUI_DIALOG_OPTIONS, TUI_DIALOGS} from './dialog.tokens';

@Injectable({
    providedIn: 'root',
    useFactory: () =>
        new TuiDialogService(TUI_DIALOGS, TuiDialogComponent, inject(TUI_DIALOG_OPTIONS)),
})
export class TuiDialogService extends TuiPopoverService<TuiDialogOptions<any>> {}
