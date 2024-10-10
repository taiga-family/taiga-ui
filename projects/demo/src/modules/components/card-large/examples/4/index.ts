import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiCardMedium, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAppearance,
        TuiButton,
        TuiCardLarge,
        TuiCardMedium,
        TuiHeader,
        TuiIcon,
        TuiRepeatTimes,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
