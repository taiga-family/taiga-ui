import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton, TuiTitleDirective} from '@taiga-ui/core';
import {TuiAppBar} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiAppBar, TuiButton, TuiPlatform, TuiTitleDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
