import {Component, Inject} from '@angular/core';
import {TuiNotificationsService} from '@taiga-ui/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

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
