import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatformDirective} from '@taiga-ui/cdk';
import {TuiButton, TuiTitleDirective} from '@taiga-ui/core';
import {TuiFadeDirective, TuiProgressModule} from '@taiga-ui/kit';
import {TuiAppBar} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAppBar,
        TuiProgressModule,
        TuiButton,
        TuiTitleDirective,
        TuiPlatformDirective,
        TuiFadeDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
