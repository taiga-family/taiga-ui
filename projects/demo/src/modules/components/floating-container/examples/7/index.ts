import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiFloatingContainer} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiFloatingContainer,
        TuiRepeatTimes,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
