import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: 'notifications',
    templateUrl: './notifications.template.html',
    changeDetection,
})
export class NotificationsComponent {
    readonly example1 = {};
}
