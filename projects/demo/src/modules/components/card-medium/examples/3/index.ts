import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIconComponent, TuiSurfaceDirective, TuiTitleDirective} from '@taiga-ui/core';
import {TuiBadgeDirective} from '@taiga-ui/kit';
import {TuiCardMedium} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiCardMedium,
        TuiSurfaceDirective,
        TuiBadgeDirective,
        TuiIconComponent,
        TuiTitleDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
