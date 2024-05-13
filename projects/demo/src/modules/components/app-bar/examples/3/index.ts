import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatformDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiTitleDirective} from '@taiga-ui/core';
import {TuiFadeDirective, TuiProgressModule} from '@taiga-ui/kit';
import {TuiAppBarModule} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAppBarModule,
        TuiProgressModule,
        TuiButtonDirective,
        TuiTitleDirective,
        TuiPlatformDirective,
        TuiFadeDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
