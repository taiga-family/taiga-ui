import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiTitleDirective} from '@taiga-ui/core';
import {TuiBadgeNotificationComponent} from '@taiga-ui/kit';
import {TuiHeaderDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiHeaderDirective,
        TuiTitleDirective,
        TuiBadgeNotificationComponent,
        TuiButton,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
