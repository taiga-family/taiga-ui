import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiTextfield} from '@taiga-ui/core';
import {TuiBadge, TuiBadgedContent, TuiBadgeNotification} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadge, TuiBadgedContent, TuiBadgeNotification, TuiButton, TuiTextfield],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
