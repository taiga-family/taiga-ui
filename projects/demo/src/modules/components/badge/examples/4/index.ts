import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBadgeDirective, TuiFadeDirective} from '@taiga-ui/kit';

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
