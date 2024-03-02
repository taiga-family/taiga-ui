import {inject, Injectable} from '@angular/core';
import {TuiPopoverService} from '@taiga-ui/cdk';
import {TUI_ALERTS} from '@taiga-ui/core';

import {TUI_PUSH_OPTIONS, type TuiPushOptions} from './push.options';
import {TuiPushAlertComponent} from './push-alert.component';

@Injectable({
    providedIn: 'root',
    useFactory: () =>
        new TuiPushService(TUI_ALERTS, TuiPushAlertComponent, inject(TUI_PUSH_OPTIONS)),
})
export class TuiPushService extends TuiPopoverService<TuiPushOptions, string> {}
