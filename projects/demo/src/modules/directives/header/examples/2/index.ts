import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIcon, TuiTitle, TuiTooltip} from '@taiga-ui/core';
import {
    TuiAvatarComponent,
    TuiBadgeDirective,
    TuiBadgeNotificationComponent,
    TuiSensitiveDirective,
} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiBadgeNotificationComponent,
        TuiHeader,
        TuiTitle,
        TuiButton,
        TuiTooltip,
        TuiAvatarComponent,
        TuiSensitiveDirective,
        TuiBadgeDirective,
        TuiIcon,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
