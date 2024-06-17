import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIconComponent, TuiSurfaceDirective, TuiTitleDirective} from '@taiga-ui/core';
import {TuiCardMediumDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiIconComponent,
        TuiSurfaceDirective,
        TuiCardMediumDirective,
        TuiTitleDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
