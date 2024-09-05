import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiButtonClose} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiCardLarge, TuiHeader, TuiSurface, TuiButton, TuiButtonClose, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
