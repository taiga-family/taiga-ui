import {Component} from '@angular/core';
import {TuiButtonDirective, TuiIconComponent} from '@taiga-ui/core';
import {
    TuiBadgedContentComponent,
    TuiBadgeDirective,
    TuiBadgeNotificationComponent,
    TuiInputModule,
} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [
        TuiBadgedContentComponent,
        TuiBadgeNotificationComponent,
        TuiInputModule,
        TuiIconComponent,
        TuiButtonDirective,
        TuiBadgeDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
