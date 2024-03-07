import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiButtonModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-alerts-example-1',
    imports: [TuiButtonModule],
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
