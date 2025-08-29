import {Injectable} from '@angular/core';
import {TuiPopoverService} from '@taiga-ui/cdk/services';
import {TUI_DIALOGS} from '@taiga-ui/core/components/dialog';

import {
    TuiNotificationMiddleComponent,
    type TuiNotificationMiddleOptions,
} from './notification-middle.component';

@Injectable({
    providedIn: 'root',
    useFactory: () =>
        new TuiNotificationMiddleService(TUI_DIALOGS, TuiNotificationMiddleComponent, {
            closable: false,
        }),
})
export class TuiNotificationMiddleService extends TuiPopoverService<TuiNotificationMiddleOptions> {}
