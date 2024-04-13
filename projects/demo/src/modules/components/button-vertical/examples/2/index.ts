import {Component} from '@angular/core';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiButtonVerticalDirective, TuiFadeDirective} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiButtonDirective, TuiButtonVerticalDirective, TuiFadeDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
