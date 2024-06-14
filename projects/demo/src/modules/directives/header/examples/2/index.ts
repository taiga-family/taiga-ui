import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiTooltipModule} from '@taiga-ui/experimental';
import {TuiAvatar, TuiBadge, TuiBadgeNotification, TuiSensitive} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiBadgeNotification,
        TuiHeader,
        TuiTitle,
        TuiButton,
        TuiTooltipModule,
        TuiAvatar,
        TuiSensitive,
        TuiBadge,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
