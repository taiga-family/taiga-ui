import {Component, Inject} from '@angular/core';
import {TuiNotificationsService} from '@taiga-ui/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

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

    showNotification() {
        this.notificationsService
            .showNotification('Это самый простой вариант', {
                label: 'С заголовком!',
            })
            .subscribe();
    }
}
