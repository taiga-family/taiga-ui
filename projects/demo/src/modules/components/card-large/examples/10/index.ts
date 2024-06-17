import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSurfaceDirective} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeaderDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiCardLarge, TuiHeaderDirective, TuiSurfaceDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
