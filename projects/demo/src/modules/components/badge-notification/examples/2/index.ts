import {Component} from '@angular/core';
import {TuiBadgeNotificationComponent} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

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
