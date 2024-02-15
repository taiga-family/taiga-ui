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

    activeItemIndex = 0;

    onClick(item: string): void {
        this.alerts.open(item).subscribe();
    }
}
