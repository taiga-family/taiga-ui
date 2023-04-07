import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'tui-let-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiLetExample2 {
    constructor(
        @Inject(TuiAlertService)
        private readonly alerts: TuiAlertService,
    ) {}

    get getter(): string {
        this.alerts.open('Getter called').subscribe();

        return '🐳';
    }
}
