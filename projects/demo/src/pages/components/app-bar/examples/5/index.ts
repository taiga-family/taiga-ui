import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiSegmented} from '@taiga-ui/kit';
import {TuiAppBar, TuiAppBarBack, TuiDynamicHeader, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAppBar,
        TuiAppBarBack,
        TuiAvatar,
        TuiCell,
        TuiDynamicHeader,
        TuiHeader,
        TuiPlatform,
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
