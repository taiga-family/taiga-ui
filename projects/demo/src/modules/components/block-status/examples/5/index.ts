import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatformDirective} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiBlockStatus} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiBlockStatus, TuiButton, TuiPlatformDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
