import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiBadge, TuiBadgedContent, TuiBadgeNotification} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    imports: [
        TuiBadge,
        TuiBadgedContent,
        TuiBadgeNotification,
        TuiButton,
        TuiIcon,
        TuiInputModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
