import {Component} from '@angular/core';
import {TuiIconComponent, TuiTitleDirective} from '@taiga-ui/core';
import {TuiHeaderDirective} from '@taiga-ui/layout';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiHeaderDirective, TuiTitleDirective, TuiIconComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
