import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNotificationsService} from '@taiga-ui/core';

@Component({
    selector: 'tui-notifications-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiNotificationsExampleComponent1 {
    constructor(
        @Inject(TuiNotificationsService)
        private readonly notificationsService: TuiNotificationsService,
    ) {}

    showNotification(): void {
        this.notificationsService
            .show('A simple option', {
                label: 'With a heading!',
            })
            .subscribe();
    }
}
