import {Component} from '@angular/core';
import {TuiBadgeDirective, tuiBadgeOptionsProvider} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    selector: 'tui-badge-example-6',
    imports: [TuiBadgeDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiBadgeOptionsProvider({appearance: 'primary'})],
})
export class TuiBadgeExample6 {}
