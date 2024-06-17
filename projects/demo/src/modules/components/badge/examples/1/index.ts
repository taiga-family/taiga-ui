import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiBadgeDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-badge-example-1',
    imports: [TuiBadgeDirective, TuiRepeatTimes],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiBadgeExample1 {}
