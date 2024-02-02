import {inject, Injectable} from '@angular/core';
import {TuiPopoverService} from '@taiga-ui/cdk';
import type {TuiDialogOptions} from '@taiga-ui/core/interfaces';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiDialogComponent} from './dialog.component';
import {TUI_DIALOG_OPTIONS, TUI_DIALOGS} from './dialog.tokens';

@Injectable({
    providedIn: 'root',
})
export class TuiDialogService extends TuiPopoverService<TuiDialogOptions<any>> {
    protected readonly items$ = inject(TUI_DIALOGS);
    protected readonly component = new PolymorpheusComponent(TuiDialogComponent);
    protected readonly options: TuiDialogOptions<any> = {
        ...inject(TUI_DIALOG_OPTIONS),
        data: undefined,
    };
}
