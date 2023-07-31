import {inject, Injectable} from '@angular/core';
import {AbstractTuiDialogService} from '@taiga-ui/cdk';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiSheetDialogComponent} from './sheet-dialog.component';
import {TUI_SHEET_DIALOG_OPTIONS, TuiSheetDialogOptions} from './sheet-dialog.options';

const DIALOG = new PolymorpheusComponent(TuiSheetDialogComponent);

@Injectable({
    providedIn: `root`,
})
export class TuiSheetDialogService extends AbstractTuiDialogService<
    TuiSheetDialogOptions<any>,
    number
> {
    protected readonly component = DIALOG;
    protected readonly defaultOptions: TuiSheetDialogOptions<any> = {
        ...inject(TUI_SHEET_DIALOG_OPTIONS),
        data: undefined,
    };
}
