import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiHeader, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiCardMedium} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiButton,
        TuiCardLarge,
        TuiCardMedium,
        TuiHeader,
        TuiIcon,
        TuiRepeatTimes,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
