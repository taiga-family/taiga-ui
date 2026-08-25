import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTitle} from '@taiga-ui/core';
import {TuiBadge, TuiMeter} from '@taiga-ui/kit';

@Component({
    imports: [TuiMeter, TuiTitle, TuiBadge],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
