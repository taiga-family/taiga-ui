import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiBadgeNotification, TuiFade} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAvatar,
        TuiBadge,
        TuiBadgeNotification,
        TuiCell,
        TuiFade,
        TuiIcon,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
