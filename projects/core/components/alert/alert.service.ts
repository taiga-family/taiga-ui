import {inject, Injectable} from '@angular/core';
import {TuiPopoverService} from '@taiga-ui/cdk';

import {TuiAlertComponent} from './alert.component';
import {type TuiAlertOptions} from './alert.interfaces';
import {TUI_ALERT_OPTIONS, TUI_ALERTS} from './alert.tokens';

@Injectable({
    providedIn: 'root',
    useFactory: () =>
        new TuiAlertService(TUI_ALERTS, TuiAlertComponent, inject(TUI_ALERT_OPTIONS)),
})
export class TuiAlertService extends TuiPopoverService<TuiAlertOptions<any>> {}
