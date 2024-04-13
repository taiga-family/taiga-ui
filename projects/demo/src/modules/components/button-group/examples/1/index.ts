import {Component} from '@angular/core';
import {TuiButtonDirective, TuiIconComponent, TuiSurfaceDirective} from '@taiga-ui/core';
import {TuiButtonGroupDirective} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [
        TuiButtonDirective,
        TuiButtonGroupDirective,
        TuiSurfaceDirective,
        TuiIconComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
