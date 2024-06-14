import {inject, Injectable} from '@angular/core';
import {TuiPopoverService} from '@taiga-ui/cdk/services';
import {TUI_ALERTS} from '@taiga-ui/core/components/alert';

import type {TuiPushOptions} from './push.options';
import {TUI_PUSH_OPTIONS} from './push.options';
import {TuiPushAlert} from './push-alert.component';

@Injectable({
    providedIn: 'root',
    useFactory: () =>
        new TuiPushService(TUI_ALERTS, TuiPushAlert, inject(TUI_PUSH_OPTIONS)),
})
export class TuiPushService extends TuiPopoverService<TuiPushOptions, string> {}
