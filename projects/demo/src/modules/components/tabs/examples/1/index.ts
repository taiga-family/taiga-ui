import {Component, inject} from '@angular/core';
import {TuiAlertService} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-tabs-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTabsExample1 {
    private readonly alerts = inject(TuiAlertService);

    protected activeItemIndex = 0;

    protected onClick(item: string): void {
        this.alerts.open(item).subscribe();
    }
}
