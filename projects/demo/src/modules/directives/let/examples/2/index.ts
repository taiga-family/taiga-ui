import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'tui-let-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiLetExample2 {
    private readonly alerts = inject(TuiAlertService);

    protected get getter(): string {
        this.alerts.open('Getter called').subscribe();

        return '🐳';
    }
}
