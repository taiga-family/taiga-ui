import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'tui-action-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiActionExample1 {
    constructor(
        @Inject(TuiAlertService)
        private readonly alerts: TuiAlertService,
    ) {}

    onClick(result: string): void {
        this.alerts.open(result).subscribe();
    }
}
