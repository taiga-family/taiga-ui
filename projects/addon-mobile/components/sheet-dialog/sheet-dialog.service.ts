import {inject, Injectable} from '@angular/core';
import {TuiPopoverService} from '@taiga-ui/cdk';
import {TUI_DIALOGS} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiSheetDialogComponent} from './sheet-dialog.component';
import {TUI_SHEET_DIALOG_OPTIONS, TuiSheetDialogOptions} from './sheet-dialog.options';

@Injectable({
    providedIn: 'root',
})
export class TuiSheetDialogService extends TuiPopoverService<TuiSheetDialogOptions<any>> {
    protected readonly items$ = inject(TUI_DIALOGS);
    protected readonly component = new PolymorpheusComponent(TuiSheetDialogComponent);
    protected readonly options = {
        ...inject(TUI_SHEET_DIALOG_OPTIONS),
        data: undefined,
    };
}
