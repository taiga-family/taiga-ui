import {Directive} from '@angular/core';
import {TUI_ALERTS} from '@taiga-ui/cdk';
import {TUI_ALERT_QUEUE_OPERATOR, TuiAlertService} from '@taiga-ui/core';

import {latestAll} from '../examples/8/latest-all';

@Directive({
    selector: '[customAlertsQueueOverride]',
    providers: [
        {
            provide: TUI_ALERT_QUEUE_OPERATOR,
            useValue: () => latestAll(3),
        },
        TuiAlertService,
        {
            provide: TUI_ALERTS,
            useExisting: TuiAlertService,
            multi: true,
        },
    ],
})
export class CustomAlertsQueueOverrideDirective {}
