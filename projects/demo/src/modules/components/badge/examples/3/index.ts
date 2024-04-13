import {Component} from '@angular/core';
import {TuiPlatformModule} from '@taiga-ui/cdk';
import {TuiIconComponent} from '@taiga-ui/core';
import {TuiBadgeDirective} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    selector: 'tui-badge-example-3',
    imports: [TuiBadgeDirective, TuiPlatformModule, TuiIconComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiBadgeExample3 {}
