import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNotificationService, TuiButton, TuiIcon, TuiLink} from '@taiga-ui/core';
import {TuiPush} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiIcon, TuiLink, TuiPush],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alert = inject(TuiNotificationService);

    protected onClose(): void {
        this.alert
            .open('Close button is visible when you subscribe to (close) output')
            .subscribe();
    }
}
