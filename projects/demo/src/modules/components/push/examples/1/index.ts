import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: `tui-push-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiPushExample1 {
    constructor(@Inject(TuiAlertService) private readonly alert: TuiAlertService) {}

    onClose(): void {
        this.alert
            .open(`Close button is visible when you subscribe to (close) output`)
            .subscribe();
    }
}
