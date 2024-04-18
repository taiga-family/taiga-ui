import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHintModule, TuiSurfaceDirective, TuiTitleDirective} from '@taiga-ui/core';
import {TuiFadeDirective} from '@taiga-ui/kit';
import {TuiCardMediumDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiCardMediumDirective,
        TuiSurfaceDirective,
        TuiTitleDirective,
        TuiFadeDirective,
        TuiHintModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
