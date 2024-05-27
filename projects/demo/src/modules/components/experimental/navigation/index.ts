import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDemo} from '@demo/utils';
import {TuiNotificationComponent} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiNotificationComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class PageComponent {}
