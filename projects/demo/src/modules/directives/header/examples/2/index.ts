import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiTitleDirective} from '@taiga-ui/core';
import {TuiTooltipModule} from '@taiga-ui/experimental';
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
        TuiTitleDirective,
        TuiButton,
        TuiTooltipModule,
        TuiAvatarComponent,
        TuiSensitiveDirective,
        TuiBadgeDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
