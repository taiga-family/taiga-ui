import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiIconComponent, TuiSurfaceDirective} from '@taiga-ui/core';
import {TuiCardLarge, TuiCardMedium, TuiHeaderDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiCardLarge,
        TuiSurfaceDirective,
        TuiHeaderDirective,
        TuiRepeatTimes,
        TuiCardMedium,
        TuiIconComponent,
        TuiButtonDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
