import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective, TuiLink, TuiNotificationComponent} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiNotificationComponent, TuiButtonDirective, TuiLink],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
