import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'tui-chip-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiChipExample3 {
    readonly checked = [true, false, true];
    readonly values = ['test', 'Some text', 'WOW!'];

    constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}

    onChip(index: number): void {
        this.alerts.open(`Clicked chip ${index + 1}`).subscribe();
    }

    onX(index: number): void {
        this.alerts.open(`Removed chip ${index + 1}`, {status: 'error'}).subscribe();
    }
}
