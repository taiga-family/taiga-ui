import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiCardMedium} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiAppearance, TuiCardMedium, TuiIcon, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
