import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiMessage} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    imports: [TuiAvatar, TuiCell, TuiMessage, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
