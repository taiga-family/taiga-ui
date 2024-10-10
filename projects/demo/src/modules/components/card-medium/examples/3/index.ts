import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';
import {TuiCardMedium} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiAppearance, TuiBadge, TuiCardMedium, TuiIcon, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
