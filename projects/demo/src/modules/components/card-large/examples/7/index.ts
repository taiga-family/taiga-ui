import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiCell,
    TuiDataList,
    TuiDropdown,
    TuiHeader,
    TuiIcon,
    TuiLink,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAppearance,
        TuiAvatar,
        TuiCardLarge,
        TuiCell,
        TuiDataList,
        TuiDropdown,
        TuiHeader,
        TuiIcon,
        TuiLink,
        TuiRepeatTimes,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
