import {Component, inject} from '@angular/core';
import {TuiAlertService} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-push-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiPushExample1 {
    private readonly alert = inject(TuiAlertService);

    protected onClose(): void {
        this.alert
            .open('Close button is visible when you subscribe to (close) output')
            .subscribe();
    }
}
