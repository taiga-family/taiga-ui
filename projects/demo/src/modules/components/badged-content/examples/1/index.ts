import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiBadgedContent, TuiBadgeNotification} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiBadge, TuiBadgedContent, TuiBadgeNotification, TuiIcon],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
