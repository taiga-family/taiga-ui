import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'tui-tabs-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTabsExample3 {
    private readonly alerts = inject(TuiAlertService);

    protected activeItemIndex = 0;

    protected onClick(item: string): void {
        this.alerts.open(item).subscribe();
    }
}
