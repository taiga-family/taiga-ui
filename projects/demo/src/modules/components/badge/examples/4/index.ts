import {Component} from '@angular/core';
import {TuiBadgeDirective, TuiFadeDirective} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    selector: 'tui-badge-example-4',
    imports: [TuiBadgeDirective, TuiFadeDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiBadgeExample4 {}
