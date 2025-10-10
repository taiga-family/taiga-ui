import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiHeader, TuiIcon, TuiLink, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadge,
    TuiBadgeNotification,
    TuiSensitive,
    TuiTooltip,
} from '@taiga-ui/kit';

@Component({
    imports: [
        TuiAvatar,
        TuiBadge,
        TuiBadgeNotification,
        TuiButton,
        TuiHeader,
        TuiIcon,
        TuiLink,
        TuiSensitive,
        TuiTitle,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
