import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiHeader, TuiIcon, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
