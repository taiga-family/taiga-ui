import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIcon, TuiTitle, TuiTooltip} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadge,
    TuiBadgeNotification,
    TuiSensitiveDirective,
} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiBadgeNotification,
        TuiHeader,
        TuiTitle,
        TuiButton,
        TuiTooltip,
        TuiAvatar,
        TuiSensitiveDirective,
        TuiBadge,
        TuiIcon,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
