import {inject, Injectable} from '@angular/core';
import {TuiNotificationService} from '@taiga-ui/core/directives/notification';

import {TuiAlertComponent} from './alert.component';
import {type TuiAlertOptions} from './alert.interfaces';
import {TUI_ALERT_CONCURRENCY, TUI_ALERT_OPTIONS} from './alert.tokens';

@Injectable({
    providedIn: 'root',
})
export class TuiAlertService extends TuiNotificationService<TuiAlertOptions<any>> {
    protected override readonly options = inject(TUI_ALERT_OPTIONS);
    protected override readonly component = TuiAlertComponent;

    constructor() {
        super(inject(TUI_ALERT_CONCURRENCY));
    }
}
