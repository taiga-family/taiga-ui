import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNotificationsService} from '@taiga-ui/core';

@Component({
    selector: 'tui-let-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiLetExample2 {
    constructor(
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
    ) {}

    get getter(): string {
        this.notifications.show('Getter called').subscribe();

        return '🐳';
    }
}
