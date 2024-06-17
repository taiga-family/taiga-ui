import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTouchable} from '@taiga-ui/addon-mobile';
import {TuiSurfaceDirective} from '@taiga-ui/core';
import {TuiCardLargeDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiTouchable, TuiCardLargeDirective, TuiSurfaceDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
