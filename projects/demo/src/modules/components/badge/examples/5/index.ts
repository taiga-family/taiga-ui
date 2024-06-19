import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBadge} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-badge-example-5',
    imports: [TuiBadge],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiBadgeExample5 {}
