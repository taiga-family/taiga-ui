import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiNotification} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    imports: [TuiNotification, TuiTitle, TuiButton, TuiLink],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
