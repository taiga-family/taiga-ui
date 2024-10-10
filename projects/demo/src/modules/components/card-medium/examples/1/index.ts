import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardMedium, TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiAppearance, TuiAvatar, TuiCardMedium, TuiCell, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
