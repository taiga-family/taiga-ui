import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiSurface} from '@taiga-ui/layout';

@Component({
    imports: [TuiAvatar, TuiSurface],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
