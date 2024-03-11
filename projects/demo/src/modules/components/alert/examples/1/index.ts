import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'tui-alerts-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiAlertExampleComponent1 {
    private readonly alerts = inject(TuiAlertService);

    protected showNotification(): void {
        this.alerts
            .open('Basic <strong>HTML</strong>', {label: 'With a heading!'})
            .subscribe();
    }
}
