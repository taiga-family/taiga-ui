import {inject, Injectable} from '@angular/core';
import {TuiNotificationService} from '@taiga-ui/core/directives/notification';

import {
    TUI_PUSH_CONCURRENCY,
    TUI_PUSH_OPTIONS,
    type TuiPushOptions,
} from './push.options';
import {TuiPushAlert} from './push-alert.component';

@Injectable({
    providedIn: 'root',
})
export class TuiPushService extends TuiNotificationService<TuiPushOptions, string> {
    protected override readonly options = inject(TUI_PUSH_OPTIONS);
    protected override readonly component = TuiPushAlert;

    constructor() {
        super(inject(TUI_PUSH_CONCURRENCY));
    }
}
