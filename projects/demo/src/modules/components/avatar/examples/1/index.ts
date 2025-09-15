import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    imports: [TuiAvatar, TuiCell],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
