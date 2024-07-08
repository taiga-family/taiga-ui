import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiBadgeNotification, TuiCell, TuiFade} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiCell,
        TuiAvatar,
        TuiIcon,
        TuiBadge,
        TuiBadgeNotification,
        TuiFade,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
