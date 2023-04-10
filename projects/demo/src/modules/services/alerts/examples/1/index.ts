import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'tui-alerts-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiAlertsExampleComponent1 {
    constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}

    showNotification(): void {
        this.alerts
            .open('Basic <strong>HTML</strong>', {label: 'With a heading!'})
            .subscribe();
    }
}
