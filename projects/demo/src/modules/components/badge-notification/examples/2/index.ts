import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBadgeNotificationComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-badge-notification-example-2',
    imports: [TuiBadgeNotificationComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiBadgeNotificationExample2 {}
