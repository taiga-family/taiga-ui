import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatformModule} from '@taiga-ui/cdk';
import {TuiTitleDirective} from '@taiga-ui/core';
import {TuiAppBarModule, TuiButtonModule} from '@taiga-ui/experimental';
import {TuiFadeDirective, TuiProgressModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiAppBarModule,
        TuiProgressModule,
        TuiButtonModule,
        TuiTitleDirective,
        TuiPlatformModule,
        TuiFadeDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
