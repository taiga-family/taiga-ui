import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatformDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiTitleDirective} from '@taiga-ui/core';
import {TuiAppBar} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiAppBar, TuiButtonDirective, TuiPlatformDirective, TuiTitleDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
