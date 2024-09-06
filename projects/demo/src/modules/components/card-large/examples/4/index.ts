import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiIcon, TuiSurface} from '@taiga-ui/core';
import {TuiCardLarge, TuiCardMedium, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiButton,
        TuiCardLarge,
        TuiCardMedium,
        TuiHeader,
        TuiIcon,
        TuiRepeatTimes,
        TuiSurface,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
