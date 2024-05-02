import {Directive} from '@angular/core';
import {TUI_ALERTS} from '@taiga-ui/cdk';
import {TUI_ALERT_QUEUE_OPERATOR, TuiAlertService} from '@taiga-ui/core';
import {mergeAll} from 'rxjs/operators';

@Directive({
    selector: '[limitOfAlertsOverride]',
    providers: [
        {
            provide: TUI_ALERT_QUEUE_OPERATOR,
            useValue: () => mergeAll(3),
        },
        TuiAlertService,
        {
            provide: TUI_ALERTS,
            useExisting: TuiAlertService,
            multi: true,
        },
    ],
})
export class LimitOfAlertsOverrideDirective {}
