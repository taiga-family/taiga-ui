import {Component} from '@angular/core';
import {TuiIconComponent} from '@taiga-ui/core';
import {
    TuiAvatarComponent,
    TuiBadgedContentComponent,
    TuiBadgeDirective,
    TuiBadgeNotificationComponent,
} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [
        TuiBadgedContentComponent,
        TuiBadgeNotificationComponent,
        TuiAvatarComponent,
        TuiIconComponent,
        TuiBadgeDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
