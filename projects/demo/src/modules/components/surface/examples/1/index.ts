import {Component} from '@angular/core';
import {TuiAppearanceDirective, TuiSurfaceDirective} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiSurfaceDirective, TuiAppearanceDirective],
    templateUrl: './index.html',
    styleUrls: ['./base.less', './index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
