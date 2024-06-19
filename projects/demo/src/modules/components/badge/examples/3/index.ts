import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiIcon} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-badge-example-3',
    imports: [TuiBadge, TuiPlatform, TuiIcon],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiBadgeExample3 {}
