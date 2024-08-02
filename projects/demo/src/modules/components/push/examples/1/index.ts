import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiButton, TuiIcon, TuiLink} from '@taiga-ui/core';
import {TuiPush} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiPush, TuiIcon, TuiButton, TuiLink],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alert = inject(TuiAlertService);

    protected onClose(): void {
        this.alert
            .open('Close button is visible when you subscribe to (close) output')
            .subscribe();
    }
}
