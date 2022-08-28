import {Injectable, Inject} from '@angular/core';
import {AbstractTuiDialogService, TuiIdService} from '@taiga-ui/cdk';
import {TuiDialogOptions} from '@taiga-ui/core/interfaces';
import {TUI_DIALOG_OPTIONS} from '@taiga-ui/core/tokens/dialog-options';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiDialogComponent} from './dialog.component';

const DIALOG = new PolymorpheusComponent(TuiDialogComponent);

@Injectable({
    providedIn: `root`,
})
export class TuiDialogService extends AbstractTuiDialogService<TuiDialogOptions<any>> {
    protected readonly component = DIALOG;

    constructor(
        @Inject(TUI_DIALOG_OPTIONS) 
        protected readonly defaultOptions: TuiDialogOptions<any>,
        @Inject(TuiIdService) idService: TuiIdService,
    ) {
        super(idService);
    }
}
