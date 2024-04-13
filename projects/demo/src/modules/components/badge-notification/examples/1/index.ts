import {Component} from '@angular/core';
import {TuiPlatformModule} from '@taiga-ui/cdk';
import {TuiBadgeNotificationComponent} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    selector: 'tui-badge-notification-example-1',
    imports: [TuiPlatformModule, TuiBadgeNotificationComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiBadgeNotificationExample1 {}
