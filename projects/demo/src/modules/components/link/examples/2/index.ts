import {Component} from '@angular/core';
import {TuiLinkDirective} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiLinkDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
