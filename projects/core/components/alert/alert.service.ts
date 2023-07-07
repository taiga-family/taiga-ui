import {inject, Injectable} from '@angular/core';
import {AbstractTuiDialogService} from '@taiga-ui/cdk';
import {TuiAlertOptions} from '@taiga-ui/core/interfaces';
import {TUI_NOTIFICATION_OPTIONS} from '@taiga-ui/core/tokens';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiAlertComponent} from './alert.component';

@Injectable({providedIn: `root`})
export class TuiAlertService extends AbstractTuiDialogService<TuiAlertOptions<any>> {
    protected readonly component = new PolymorpheusComponent(TuiAlertComponent);
    protected readonly defaultOptions = {
        ...inject(TUI_NOTIFICATION_OPTIONS),
        data: undefined,
    };
}
