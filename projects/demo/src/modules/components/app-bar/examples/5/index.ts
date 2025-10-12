import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform, TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiCell, TuiHeader, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiSegmented} from '@taiga-ui/kit';
import {TuiAppBar, TuiDynamicHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAppBar,
        TuiAvatar,
        TuiCell,
        TuiDynamicHeader,
        TuiHeader,
        TuiPlatform,
        TuiRepeatTimes,
        TuiSegmented,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected activeItemIndex = 0;
}
