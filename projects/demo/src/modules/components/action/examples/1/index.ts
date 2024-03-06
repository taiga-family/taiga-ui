import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';
import {TuiActionModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-action-example-1',
    imports: [TuiActionModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiActionExample1 {
    private readonly alerts = inject(TuiAlertService);

    protected onClick(result: string): void {
        this.alerts.open(result).subscribe();
    }
}
