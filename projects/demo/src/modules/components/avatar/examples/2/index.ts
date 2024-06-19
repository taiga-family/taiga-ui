import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoColorPipe} from '@taiga-ui/core';
import {TuiAvatar, TuiFadeDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAvatar, TuiAutoColorPipe, TuiFadeDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
