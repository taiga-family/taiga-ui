import {inject, Injectable} from '@angular/core';
import {AbstractTuiDialogService} from '@taiga-ui/cdk';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiMobileDialogComponent} from './mobile-dialog.component';
import {TuiMobileDialogOptions} from './mobile-dialog.interfaces';
import {TUI_MOBILE_DIALOG_OPTIONS} from './mobile-dialog.tokens';

const DIALOG = new PolymorpheusComponent(TuiMobileDialogComponent);

@Injectable({
    providedIn: `root`,
})
export class TuiMobileDialogService extends AbstractTuiDialogService<
    TuiMobileDialogOptions<any>,
    number
> {
    protected readonly component = DIALOG;
    protected readonly defaultOptions: TuiMobileDialogOptions<any> = {
        ...inject(TUI_MOBILE_DIALOG_OPTIONS),
        data: undefined,
    };
}
