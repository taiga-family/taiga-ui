import {Component, inject} from '@angular/core';
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
    private readonly alerts = inject(TuiAlertService);

    protected readonly checked = [true, false, true];
    protected readonly values = ['test', 'Some text', 'WOW!'];

    protected onChip(index: number): void {
        this.alerts.open(`Clicked chip ${index + 1}`).subscribe();
    }

    protected onX(index: number): void {
        this.alerts.open(`Removed chip ${index + 1}`, {status: 'error'}).subscribe();
    }
}
