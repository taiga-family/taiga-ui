import {Component} from '@angular/core';
import {TuiButtonDirective, TuiTitleDirective} from '@taiga-ui/core';
import {TuiAppBarModule} from '@taiga-ui/experimental';
import {TuiProgressModule} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiAppBarModule, TuiButtonDirective, TuiTitleDirective, TuiProgressModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
